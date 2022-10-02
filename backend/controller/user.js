const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validator = require('validator');

const User = require('../model/user');
const ExpressError = require('../utils/ExpressError');

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
}

module.exports.signup = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) return next(new ExpressError('All fields are required', 400));
    if (!validator.isEmail(email)) return next(new ExpressError('Email is invalid', 400));
    if (!validator.isStrongPassword(password)) return next(new ExpressError('Password not strong enough', 400));

    try {
        const exist = await User.findOne({ email });
        if (exist) return next(new ExpressError('User already exists', 400));

        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);

        const user = new User({ email, password: hash });
        await user.save();

        const token = createToken(user._id);

        res.status(200).json({ email, token });
    } catch (e) {
        res.status(401).json({ error: e.message });
    }
}

module.exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) return next(new ExpressError('All fields are required', 400));

    try {
        const user = await User.findOne({ email });
        if (!user) return next(new ExpressError('Email or password wrong!', 400));

        const match = await bcrypt.compare(password, user.password);
        if (!match) return next(new ExpressError('Email or password wrong!', 400));

        const token = createToken(user._id);

        res.status(200).json({ email, token });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validator = require('validator');

const User = require('../model/user');
const ExpressError = require('../utils/ExpressError');

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
}

module.exports.signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) return next(new ExpressError('All fields are required', 400));
    if (validator.isEmpty(username)) return next(new ExpressError('Username is required'));
    if (!validator.isEmail(email)) return next(new ExpressError('Email is invalid', 400));
    if (!validator.isStrongPassword(password)) return next(new ExpressError('Password not strong enough', 400));

    try {
        const exsitUsername = await User.findOne({ username });
        if (exsitUsername) return next(new ExpressError('Username already in use', 400));
        const existEmail = await User.findOne({ email });
        if (existEmail) return next(new ExpressError('Email already in use', 400));


        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);

        const user = new User({ username, email, password: hash });
        await user.save();

        const token = createToken(user._id);

        res.status(200).json({ email, token });
    } catch (e) {
        res.status(401).json({ error: e.message });
    }
}

module.exports.login = async (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return next(new ExpressError('All fields are required', 400));
    }

    try {
        const user = await User.findOne({ username });
        if (!user) return next(new ExpressError('Username or password wrong!', 400));

        const match = await bcrypt.compare(password, user.password);
        if (!match) return next(new ExpressError('Username or password wrong!', 400));

        const token = createToken(user._id);

        res.status(200).json({ username, token });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}
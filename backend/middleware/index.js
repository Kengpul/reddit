const jwt = require('jsonwebtoken');
const User = require('../model/user');
const Post = require('../model/post');

module.exports.requireAuth = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: 'Authorization token required' });
    }

    const token = authorization.split(' ')[1];

    try {
        const { _id } = jwt.verify(token, process.env.SECRET);

        req.user = await User.findOne({ _id }).select('_id');
        next();

    } catch (e) {
        res.status(400).json({ error: 'Request is not authorized!' });
    }
}

module.exports.isAuthor = async (req, res, next) => {
    const { id } = req.params;
    const post = await Post.findById(id).populate('author', 'username');
    const user = await User.findById(req.user._id);
    if (post.author.username !== user.username) {
        return res.status(400).json({ error: 'You dont have permission to do that' });
    }
    next();
}
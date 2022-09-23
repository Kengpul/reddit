const { isValidObjectId } = require('mongoose');
const Post = require('../model/post');
const ExpressError = require('../utils/ExpressError');

module.exports.index = async (req, res) => {
    const posts = await Post.find({});
    res.json(posts);
}

module.exports.createPost = async (req, res, next) => {
    const { title, text } = req.body;
    if (!title || !text) {
        return next(new ExpressError('title or text cannot be blank', 500));
    }
    const post = new Post({ title, text });
    await post.save();
    res.json(post);
}

module.exports.showPost = async (req, res, next) => {
    const { id } = req.params;
    validateId(id, next);
    const post = await Post.findById(id);
    if (!post) return next(new ExpressError('Cannot find that post!', 400));
    res.json(post);
}

module.exports.updatePost = async (req, res, next) => {
    const { id } = req.params;
    validateId(id, next);
    const post = await Post.findByIdAndUpdate(id, req.body, { new: true });
    res.json(post);
}

module.exports.deletePost = async (req, res, next) => {
    const { id } = req.params;
    validateId(id, next);
    const post = await Post.deleteOne({ _id: id });
    res.json(post);
}

const validateId = (id, next) => {
    if (!isValidObjectId(id)) {
        return next(new ExpressError('Cannot find that post!', 400));
    }
}
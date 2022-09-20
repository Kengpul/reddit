const Post = require('../model/post');

module.exports.index = async (req, res) => {
    const posts = await Post.find({});
    res.json(posts);
}

module.exports.createPost = (req, res) => {
    const { title, text } = req.body;
    const post = new Post({ title, text })
    post.save();
    res.json(post);
}

module.exports.showPost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.json(post);
}

module.exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(id, req.body, { new: true });
    res.json(post);
}

module.exports.deletePost = async (req, res) => {
    const post = await Post.deleteOne({ _id: req.params.id });
    res.json(post);
}
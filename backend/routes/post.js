const express = require('express');
const router = express.Router();
const post = require('../controller/post');

router.get('/', post.index)

router.post('/', post.createPost)

router.route('/')
    .get(post.index)
    .post(post.createPost)

router.route('/:id')
    .patch(post.updatePost)
    .delete(post.deletePost)

module.exports = router;
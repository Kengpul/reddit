const express = require('express');
const router = express.Router();
const post = require('../controller/post');
const catchAsync = require('../utils/catchAsync');
const { requireAuth } = require('../middleware');

router.use(requireAuth);

router.route('/')
    .get(catchAsync(post.index))
    .post(catchAsync(post.createPost))

router.route('/:id')
    .get(catchAsync(post.showPost))
    .patch(catchAsync(post.updatePost))
    .delete(catchAsync(post.deletePost))

module.exports = router;
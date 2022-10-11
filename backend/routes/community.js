const express = require('express');
const router = express.Router();
const community = require('../controller/community');

router.post('/', community.create);

module.exports = router;
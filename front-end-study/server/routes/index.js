const express = require('express');
const get = require('./get');
const auth = require('./auth');

const router = express.Router();
router.use('/get', get);
router.use('/auth', auth);

module.exports = router;

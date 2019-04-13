const express = require('express');
const router = express.Router();

const indexGet = require('../controllers/indexGet');

const newsListRouter = require('./newslist');

/* GET home page. */
router.get('/', indexGet);
router.use('/newslist', newsListRouter);

module.exports = router;

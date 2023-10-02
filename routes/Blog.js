var express = require('express');
const { blogStat, blogSearch } = require('../controllers/Blog');
var router = express.Router();

/* GET users listing. */
router.get('/blog-stats', blogStat)
router.get('/blog-search/?', blogSearch)

module.exports = router;

var express = require('express');
var app = express();
var router = express.Router();

/* home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Songs'
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/seat', function(req, res, next) {
  res.render('seat');
});

router.get('/intro', function(req, res, next) {
  res.render('intro');
});

router.get('/payment', function(req, res, next) {
  res.render('seat');
});

router.get('/reserve', function(req, res, next) {
  res.render('reserve');
});

module.exports = router;

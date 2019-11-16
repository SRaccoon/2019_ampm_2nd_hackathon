var express = require('express');
var router = express.Router();

var seats = [
  [1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1],
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/seat', function(req, res, next) {
  res.render('seat',{seats:JSON.stringify(seats)});
});

router.post('/seat', function(req, res, next) {
  res.send({seats:JSON.stringify(seats)});
});

router.get('/intro', function(req, res, next) {
  res.render('intro');
});

router.get('/payment', function(req, res, next) {
  res.render('payment');
});

router.get('/reserve', function(req, res, next) {
  res.render('reserve');
});

var moduleToApp = {
  router:router,
  seats:seats
}

module.exports = moduleToApp;

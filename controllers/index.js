var express = require('express');
var router = express.Router();
var path = require('path');
var config = require('../config');

router.use('/auth', require('./auth'));
router.use('/workouts', require('./workouts'));
router.use('/weight', require('./weight'));


// perhaps this should go somewhere else
router.get('/session-data', function (req, res) {
  var data = {
    logged: req.session.userId !== undefined,
		userId: req.session.userId
  };

  res.send(data);
});

router.get('/logout', function (req, res) {
  req.session.destroy(function() {
    res.redirect('/');
  });
});


// React Router browser history requires every get route to serve the index.html file in case a user
// refreshes on a page or starts using the app from any non-index route
router.get('*', function(req, res) {
	res.sendFile('index.html', { root: config.publicRoot});
});


module.exports = router;

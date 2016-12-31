var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/workouts', require('./workouts'));


// React Router browser history requires every get route to serve the index.html file in case a user
// refreshes on a page or starts using the app from any non-index route
router.get('*', function(req, res) {
	res.sendFile('index.html', { root: 'src'});
});


module.exports = router;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
require('express-helpers')(app);
app.enable('trust proxy');
var port = process.env.PORT || 3000;


// if in dev, get credentials from config file, else get from heroku env in deployment
if(port === 3000) {
	var config = require('./config.js');
} else {
	var config = {
		mongooseUsername: process.env.mongooseUsername,
		mongoosePassword: process.env.mongoosePassword
	};
}

mongoose.connect('mongodb://' + config.mongooseUsername + ':' + config.mongoosePassword + '@ds149268.mlab.com:49268/olistica');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected!');
});

// middleware
app.use('/bin', express.static(path.join(__dirname, 'bin')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("./controllers"));

// begin app
app.listen(port, function(req, res) {
	console.log('listening on 3000');
});

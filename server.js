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

// middleware
app.use('/bin', express.static(path.join(__dirname, 'bin')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

// begin app
app.listen(port, function(req, res) {
	console.log('listening on 3000');
	console.log('With a change..');
})

// sends index page for react to build off of; all other routes are APIs to support the react routes
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/src/index.html');
});

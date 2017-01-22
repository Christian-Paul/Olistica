var express = require('express');
var app = express();
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
require('express-helpers')(app);
app.enable('trust proxy');
var port = process.env.PORT || 3000;

var isDev = port === 3000;


// if in dev, get credentials from local config file and start react hot loader
// else, get credentials from environment
if(port === 3000) {
	var config = require('./config.js');

	// react hot loader
	var webpack = require('webpack');
	var webpackConfig = require('./webpack.config');
	var compiler = webpack(webpackConfig);

	app.use(require('webpack-dev-middleware')(compiler, {
		publicPath: webpackConfig.output.publicPath
	}));
	app.use(require('webpack-hot-middleware')(compiler));

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

// session handler
app.use(session({
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  secret: 'session secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: false,
    secure: false,
    maxAge: 31540000000
  }
}));

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/bin', express.static(path.join(__dirname, 'bin')));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(require("./controllers"));

// begin app
app.listen(port, function(req, res) {
	console.log('listening on 3000');
});

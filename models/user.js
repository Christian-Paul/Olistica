var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String
});

var User = mongoose.model('User', userSchema);

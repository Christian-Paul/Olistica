var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    id: Number
});

var User = mongoose.model('User', userSchema);

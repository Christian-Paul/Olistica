var mongoose = require('mongoose');

var weightSchema = mongoose.Schema({
    userId: String,
    date: Date,
    weight: Number
});

var Weight = mongoose.model('Weight', weightSchema);

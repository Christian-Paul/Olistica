var mongoose = require('mongoose');

var weightSchema = mongoose.Schema({
    userId: String,
    date: Date,
    weight: Number
});

var Weight = mongoose.model('Weight', weightSchema);

exports.addNew = function (userId, date, weight, callback) {
  var weightEntry = new Weight({
    userId: userId,
    date: date,
    weight: weight
  });

  weightEntry.save(function (err, weight) {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null);
    }
  });
}

exports.deleteEntry = function (userId, weightId, callback) {
  console.log('trying to delete entry!');

  Weight.find({ _id: weightId}).remove().exec(function (err, list) {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, list);
    }
  });
}

exports.list = function (userId, callback) {
  Weight.find({ userId: userId})
  .sort({ date: 1 })
  .exec(function (err, list) {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, list);
    }
  });
}

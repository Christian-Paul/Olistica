var express = require('express');
var router = express.Router();
var Workout = require('../models/workout');

router.get('/summary', function (req, res) {
  var userId = 1;

  console.log('summary');

  Workout.summary(userId, function (err, summary) {
    if (err) {
      console.log(err);
      res.send({
        error: err
      });
    } else {
      res.send({
        workouts: summary
      });
    }
  });
});

router.get('/workout/:id', function (req, res) {
  var userId = 1;
  var id = req.params.id;

  Workout.get(id, function (err, workout) {
    if (err) {
      res.send({
        error: err
      });
    } else {
      res.send({
        workout: workout
      });
    }
  });
});

router.get('/testdata', function (req, res) {
  Workout.addWorkout();
});

module.exports = router;

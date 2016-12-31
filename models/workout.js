var mongoose = require('mongoose');

var workoutSchema = mongoose.Schema({
    title: String,
    date: Date,
    exercises: [{
      name: String,
      sets: [
        {
          reps: Number,
          weight: Number
        }
      ]
    }]
});

var Workout = mongoose.model('Workout', workoutSchema);

exports.summary = function (userId, callback) {
  Workout.find({ }).exec((err, workouts) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, workouts);
    }
  });
}

exports.get = function (id, callback) {
  Workout.findOne({ _id: id }).exec((err, workouts) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, workouts);
    }
  });
}

exports.addWorkout = function () {
  var workouts = [
    {
      title: '11/27/16',
      date: Date.now(),
      exercises: [{
        name: 'Deadlift',
        sets: [
          {
            reps: 5,
            weight: 225
          },
          {
            reps: 5,
            weight: 245
          },
          {
            reps: 5,
            weight: 295
          }
        ]
      },
      {
        name: 'Bench',
        sets: [
          {
            reps: 5,
            weight: 145
          },
          {
            reps: 5,
            weight: 345
          },
          {
            reps: 5,
            weight: 295
          }
        ]
      },
      {
        name: 'Squat',
        sets: [
          {
            reps: 5,
            weight: 225
          },
          {
            reps: 5,
            weight: 245
          },
          {
            reps: 5,
            weight: 295
          }
        ]
      }]
    },
    {
      title: '11/27/16',
      date: Date.now(),
      exercises: [{
        name: 'Deadlift',
        sets: [
          {
            reps: 5,
            weight: 225
          },
          {
            reps: 5,
            weight: 245
          },
          {
            reps: 5,
            weight: 295
          }
        ]
      },
      {
        name: 'Overhead Press',
        sets: [
          {
            reps: 5,
            weight: 145
          },
          {
            reps: 5,
            weight: 145
          },
          {
            reps: 5,
            weight: 115
          }
        ]
      },
      {
        name: 'Squat',
        sets: [
          {
            reps: 5,
            weight: 225
          },
          {
            reps: 5,
            weight: 245
          },
          {
            reps: 5,
            weight: 295
          }
        ]
      }]
    }
  ];

  for (var i = 0;i < workouts.length;++i) {
    var workout = new Workout(workouts[i]);

    workout.save(function (err, workout) {
      if (err) {
        console.log(err);
      } else {
        console.log('added');
      }
    });
  }
}

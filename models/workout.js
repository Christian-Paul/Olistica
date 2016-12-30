var mongoose = require('mongoose');

var workoutSchema = mongoose.Schema({
    date: Date,
    exercises: [
      name: String,
      sets: [
        {
          reps: Number,
          weight: Number
        }
      ]
    ]
});

var Workout = mongoose.model('Workout', workoutSchema);

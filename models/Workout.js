const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  //exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
  exercises: [
    {
      ObjectId: {
        type: mongoose.Types.ObjectId,
        default: new mongoose.Types.ObjectId()
      },
      exercise: {
        type: Schema.Types.ObjectId,
        ref: 'Exercise'
      },
      reps: {
        type: Number,
        required: true
      },
      sets: {
        type: Number,
        required: true
      },
      weight: {
        type: String,
        required: true
      }
    }
  ]
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
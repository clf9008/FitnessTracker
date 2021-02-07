//required dependencies
const mongoose = require("mongoose");
const mongoose = require("mongoose");
//setting a constant in global memory for mongoose schema
const Schema = mongoose.Schema;
//setting a constant in global memeory for new schema that defines excerises
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      duration: Number,
      weight: {
        type: Number,
        default: 0
      },
      reps: {
        type: Number,
        default: 0
      },
      sets: {
        type: Number,
        default: 0
      },
      distance: {
        type: Number,
        default: 0
      }
    }
  ],
  totalDuration: {
    type: Number,
    default: 0,
  }

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
const { default: mongoose } = require("mongoose");
const Workout = require("../model/newUserModel");

// get all workout

const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createAt: -1 });

  res.status(200).json(workouts);
};

// get single workout

const getWorkout = async (req, res) => {
  const { id } = req.params;
  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "no such workout" });
  }

  res.status(200).json(workout);
};

// create workout
const createWorkout = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const workout = await Workout.create({ name, email, phone });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(400).json({ error: "no such workout" });
  }
  res.status(200).json(workout);
};

// update workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout" });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(400).json({ error: "no such workout" });
  }
  res.status(200).json(workout);
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};

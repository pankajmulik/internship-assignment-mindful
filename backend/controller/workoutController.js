const express = require("express");

const mongoose = require("mongoose");

const Workout = require("../model/addUser");


const getAddedUser = async (req, res) => {
  const users = await Workout.find({}).sort({ createdAt: -1 });

  res.status(200).json(users);
};

const createUser = async (req, res) => {
  const { name, email, phone, address } = req.body;

  try {
    const user = await Workout.create({ name, email, phone, address });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout" });
  }

  const user = await Workout.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(400).json({ error: "no such workout" });
  }
  res.status(200).json(user);
};

const updateUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout" });
  }
  const user = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!user) {
    return res.status(400).json({ error: "no such workout" });
  }
  res.status(200).json(user);
};

<<<<<<< HEAD
module.exports = { getAddedUser, createUser, deleteUser, updateUser };
=======


module.exports = {
  getAddedUser,
  createUser,
  deleteUser,
  updateUser
  
};
>>>>>>> 246292393eec81ffe97cceb6c633c774470de3c6

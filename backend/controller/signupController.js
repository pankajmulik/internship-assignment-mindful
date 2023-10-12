const express = require("express");
const Workout = require("../model/newUserModel");

const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await Workout.findById(id);

  if (!user) {
    return res.status(404).json({ error: "no such workout" });
  }

  res.status(200).json(user);
};

const createNewUser = async (req, res) => {
  const { name, email, phone, address, gender, referal, city, state } =
    req.body;

  try {
    const user = await Workout.create({
      name,
      email,
      phone,
      address,
      gender,
      referal,
      city,
      state,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUser,
  createNewUser,
};

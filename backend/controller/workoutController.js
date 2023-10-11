const express = require("express");

const mongoose = require("mongoose");

const addUser = require("../model/addUser");

const getAddedUser = async (req, res) => {
  const users = await addUser.find({}).sort({ createdAt: -1 });

  res.status(200).json(users);
};

module.exports = getAddedUser;

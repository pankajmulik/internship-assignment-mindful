const express = require("express");

const router = express.Router();

const {
  getAddedUser,
  createUser,
  deleteUser,
} = require("../controller/workoutController");

router.use("/", getAddedUser);

router.use("/create", createUser);

router.use("/delete", deleteUser);

module.exports = router;

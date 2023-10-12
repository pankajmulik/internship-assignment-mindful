const express = require("express");

const router = express.Router();

const {
  getAddedUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../controller/workoutController");

const {
  getUserProfile,
  createSignupUser,
} = require("../controller/signupController");

router.use("/", getAddedUser);

router.use("/create", createUser);

router.use("/delete", deleteUser);

router.use("/update", updateUser);
router.use("/profile", getUserProfile);

router.use("/signupdata", createSignupUser);

module.exports = router;

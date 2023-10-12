const express = require("express");

const router = express.Router();

const {
  getAddedUser,
  createUser,
  deleteUser,
} = require("../controller/workoutController");



const { getUser, createNewUser } = require("../controller/signupController");

router.use("/", getAddedUser);

router.use("/create", createUser);

router.use("/delete", deleteUser);

router.use("/update", updateUser);

router.use("/signup", createNewUser);
router.use("/profile", getUser);

module.exports = router;

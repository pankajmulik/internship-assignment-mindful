const express = require("express");

const router = express.Router();

const {
  getAddedUser,
  createUser,
  deleteUser,
  updateUser,
  userProfile,
  signupUser,
} = require("../controller/workoutController");

router.use("/", getAddedUser);

router.use("/create", createUser);

router.use("/delete", deleteUser);

router.use("/update", updateUser);

router.use("/signup", signupUser);
router.use("/profile", userProfile);

module.exports = router;

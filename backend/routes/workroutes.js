const express = require("express");

const router = express.Router();

const {
  getAddedUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../controller/workoutController");

<<<<<<< HEAD
  createSignupUser,
const { getUser, createNewUser } = require("../controller/signupController");
=======
const {
  getUserProfile,
  createSignupUser,
} = require("../controller/signupController");
>>>>>>> 246292393eec81ffe97cceb6c633c774470de3c6

router.use("/", getAddedUser);

router.use("/create", createUser);

router.use("/delete", deleteUser);

router.use("/update", updateUser);
<<<<<<< HEAD

router.use("/signup", createNewUser);
router.use("/profile", getUser);
=======
router.use("/profile", getUserProfile);

router.use("/signupdata", createSignupUser);
>>>>>>> 246292393eec81ffe97cceb6c633c774470de3c6

module.exports = router;

const express = require("express");

const router = express.Router();

const getAddedUser = require("../controller/workoutController");

router.use("/", getAddedUser);

module.exports = router;

const express = require("express");
const dotenv = require("dotenv").config();
const { default: mongoose } = require("mongoose");

const app = express();

const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI;

const workoutRoutes = require("./routes/workroutes");

app.use((req, res, next) => {
  next();
});

app.use("/api/users", workoutRoutes);

mongoose
  .connect(MONGO_URI)

  .then(() => {
    // here port is imported from .env file which is used for hideing purpose
    app.listen(PORT, (req, res) => {
      console.log("connected db on port");
    });
  })
  .catch((err) => {
    console.log(err);
  });

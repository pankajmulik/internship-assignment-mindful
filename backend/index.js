const express = require("express");
require("dotenv").config();
const { default: mongoose, connection } = require("mongoose");

const app = express();


const port = process.env.PORT || 5000;

const port = 5000;

const MONGO_URL = process.env.MONGO_URI;

const workoutRoutes = require("./routes/workroutes");

app.use((req, res, next) => {
  next();
});

app.use(express.json);


app.use("/api/data", workoutRoutes);

app.use("/api/userdata", workoutRoutes);


mongoose
  .connect(MONGO_URL)

  .then(() => {
    if (!connection) {
      console.log("not connected to db ");
    }
    // here port is imported from .env file which is used for hideing purpose
    app.listen(port, (req, res) => {

      console.log("connected db on port");

      console.log("connected db on port" + port + MONGO_URL);

    });
  })
  .catch((err) => {
    console.log(err);
  });

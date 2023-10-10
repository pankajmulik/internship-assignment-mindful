const express = require("express");
const { default: mongoose } = require("mongoose");
const workRoutes = require("./routes/workroutes");
const env = require("env");
env.config();

const app = express();

const port = process.env.PORT;

app.use((req, res, next) => {
  next();
});

app.use("/api/userdata", workRoutes);

mongoose
  .connect(port)

  .then(() => {
    app.listen(5000, (req, res) => {
      console.log("connected to port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    name: {
      type: String,

      ref: "User",
    },
    email: {
      type: String,
      ref: "User",
    },
    phone: {
      type: Number,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const adduser = mongoose.Schema("adduser", userModel);
module.exports = adduser;

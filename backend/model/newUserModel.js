const mongoose = require("mongoose");

const newUserModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
    },
    referal: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);
module.exports = mongoose.model("NewUser", newUserModel);

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    min: 3,
    max: 100,
  },
  phone: {
    type: String,
    min: 3,
    max: 100,
  },
  lastname: {
    type: String,
    min: 3,
    max: 100,
  },
  email: {
    type: String,
    min: 3,
    max: 100,
    required: true,
  },
  password: {
    type: String,
    min: 3,
    max: 100,
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);

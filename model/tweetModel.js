const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  content: {
    type: String,
    min: 10,
    max: 550,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("tweet", tweetSchema);

const mongoose = require("mongoose");
const userScheme = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  },
  update: Date
});
module.exports = mongoose.model("User", userScheme);

const mongoose = require("mongoose");

const postScheme = new mongoose.Schema({
  title: {
    type: String,
    required: "title is required field",
    minlength: 4,
    maxlength: 150
  },
  body: {
    type: String,
    required: "Body is required field",
    minlength: 4,
    maxlength: 2000
  }
});
module.exports = mongoose.model("Post", postScheme);

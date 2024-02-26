const mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "user already exists"],
  },
  password: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("RegisterModel",registerSchema);

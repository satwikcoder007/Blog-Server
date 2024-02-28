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
    type: String,
    required: true,
  },
  user:{
    type:String,
    default:"random",
    enum:["student","admin","random"],
  },
  token:{
    type:String
  }
});

module.exports = mongoose.model("RegisterModel",registerSchema);

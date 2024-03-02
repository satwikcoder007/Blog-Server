const Register = require("../models/RegisterModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const RegisterModel = require("../models/RegisterModel");

require("dotenv").config();

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Enter all field");
    }

    const user = await Register.findOne({ email });
    console.log(user);
    if (!user) {
      throw new Error("User Not Found");
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new Error("Password Invalid");
    }

    const refreshPayload = {
      id: user._id,
      name: user.name,
      user:user.user
    };
    const accessPayload = {
      id: user._id,
      email:user.email,
      name: user.name,
      user:user.user
    }
    const secretKey = process.env.SECRET_KEY;
    const refreshToken = jwt.sign(refreshPayload, secretKey, {expiresIn: "30d"});
    const accessToken = jwt.sign(accessPayload, secretKey , {expiresIn: "2h"});
    const data = await RegisterModel.findByIdAndUpdate(user._id,{token:refreshToken},{new:true});
    res
      .cookie("refreshToken", refreshToken , { httpOnly: true, maxAge: 10000000000000 })
      .cookie("accessToken",accessToken,{ httpOnly: true, maxAge: 100000000 })
      .status(200)
      .json({
        success: true,
        data:data
      });
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
};

module.exports = Login;

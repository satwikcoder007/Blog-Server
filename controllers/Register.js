const RegisterModel = require("../models/RegisterModel");
const bcrypt = require("bcrypt");

const Register = async (req, res) => {
  try {
    var { name, email, password ,user} = req.body;
    const check = await RegisterModel.findOne({ email });
    if (check) {
      throw new Error( "User already exist" )
        
      };
     
      const hashValue = await bcrypt.hash(password, 10);
      const data = await RegisterModel.create({
        name: name,
        email: email,
        password: hashValue,
        user: user
      });
      res.status(200).json({
        success: true,
        data: data,
        message: "Data Send success",
      });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "can not find",
      message: error.message,
    });
  }
};

module.exports = Register;

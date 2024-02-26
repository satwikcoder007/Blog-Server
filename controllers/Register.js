const RegisterModel = require("../models/RegisterModel");

const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const data = await RegisterModel.create({ name, email, password });
    res.status(200).json({
      success: true,
      data: data,
      message: "Data Send success",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "can not find",
      message: "chodna naki",
    });
  }
}

module.exports=Register
const RegisterModel = require("../models/RegisterModel");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const SendMail = async (req, res) => {
  const nodemailer = require("nodemailer");
  const target = req.body.userEmail;
  const data = await RegisterModel.findOne({email:target});
  console.log(data);
  if(!data) 
  {
    res.status(404).json({
        success:false,
        data:"register maria ai age",
        message:"not success"
    })
    return;
  } 
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: "spdboys10@gmail.com",
      pass: "tmfv wafx ppcj gefu",
    },
  });
  const payload = {
    
    email:target
  }
  const secretKey = process.env.SECRET_KEY;
  // send mail with defined transport object
  try {
    const info = await transporter.sendMail({
      from: '"SPD owner 👻" <maddison53@ethereal.email>', // sender address
      to: target, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "click the below link", // plain text body
      html: "<div><p>click the below link<p><br/><Link>http://localhost:5173/newpassword</Link></div>", // html body
    });
    const token = jwt.sign(payload, secretKey, {expiresIn: "1h"});
    res
        .cookie("token",token,{ httpOnly: true, maxAge: 10000000000000 })
        .status(200)
        .json({
            success:true,
            message:"email Send"
        })

  } catch (error) {
    res.status(500).json({
        success:false,
        data:"108 bar",
        message:"not success"
    })
  }

};

module.exports = SendMail;

const RegisterModel = require("../models/RegisterModel");
const Logout = async(req, res) => {
  try {
    res.clearCookie("token");
    const newData = await RegisterModel.findByIdAndUpdate(req.data.id,{token:""},{new:true});
    res.status(200).json({
        success:true,
        data:newData,
        message:"logout success"
    })
  } catch (error) {
    res.status(500).json({
        message: "not done",
      });
  }
};
module.exports = Logout;

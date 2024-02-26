const PostModel = require("../models/PostModel");

const Create = async (req, res) => {
  try {
    const { title, body } = req.body;
    const data = await PostModel.create({ title, body });

    res.status(200).json({
      success: true,
      data: data,
      message: "Data Send success",
    });
  } catch (error) {
    
    res.status(500).json({
        success: false,
        data:"can not find",
        message: "chodna naki",
      });
  }
};

module.exports = Create;

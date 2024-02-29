const LikeModel = require("../models/LikeModel");
const PostModel = require("../models/PostModel");

const Like = async (req, res) => {
  try {
    const { post, user, value } = req.body;

    const data = await LikeModel.create({ post, user, value });

    var updatePost = {};
    value
      ? (updatePost = await PostModel.findByIdAndUpdate(
          post,
          { $push: { likes: data._id } },
          { new: true }
        ).populate("likes").exec())
      : (updatePost = await PostModel.findByIdAndUpdate(
          post,
          { $push: { unlikes: data._id } },
          { new: true }
        ).populate("unlikes").exec());
    res.status(200).json({
      success: true,
      data: updatePost,
      message: "Post Liked",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "Not found",
      message: error.message,
    });
  }
};

module.exports = Like;

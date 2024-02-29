const mongoose = require("mongoose");
const CommentModel = require("./CommentModel");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LikeModel",
    },
  ],
  unlikes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LikeModel",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: CommentModel,
    },
  ],
});

module.exports = mongoose.model("PostModel", postSchema);

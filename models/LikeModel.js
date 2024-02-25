const mongoose =require("mongoose");

const likeSchema = mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"PostModel" //reffrence of post model
    },
    user:{
        type:String,
        required: true,
    }
});

module.exports = mongoose.model("LikeModel",likeSchema);
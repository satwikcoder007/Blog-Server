const mongoose =require("mongoose");

const commentSchema = mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"PostModel" //reffrence of post model
    },
    user:{
        type:String,
        required: true,
    },
    body:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("CommentModel",commentSchema);
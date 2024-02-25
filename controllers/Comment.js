const PostModel = require("../models/PostModel");
const CommentModel = require("../models//CommentModel");

const Comment = async(req,res)=>{
    try {
        const {post, user ,body} = req.body;
        const data = await CommentModel.create({post , user , body});
        

        const updatePost = await PostModel.findByIdAndUpdate(post,{$push : {comments : data._id}},{new :true})
            .populate("comments")

        res.status(200).json({
            success:true,
            data:updatePost,
            message:"Data Send success"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            data:"Not found",
            message:error.message,
        })

    }
}

module.exports = Comment;
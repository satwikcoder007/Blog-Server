const jwt = require("jsonwebtoken");
require("dotenv").config();

const isStudent = (req,res,next)=>{
        console.log("I am here");
        console.log(req.data);
        if(req.data.user !=="student")
        {
            console.log("I have reached the if");
            res.status(401).json({
                just: "init",
                success:false,
                messaage:"this is a protected route"
            })
            return ;
        }
        next();
}

module.exports = isStudent;

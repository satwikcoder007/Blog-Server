const jwt = require("jsonwebtoken");
require("dotenv").config();

const isStudent = (req,res,next)=>{
        if(req.data.user !=="student")
        {
            res.status(401).json({
                success:false,
                messaage:"this is a protected route"
            })
            return ;
        }
        next();
}

module.exports = isStudent;

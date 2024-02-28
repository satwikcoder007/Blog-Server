const jwt = require("jsonwebtoken");
require("dotenv").config();

const isStudent = (req,res,next)=>{
        console.log(req.data);

        if(req.data.user !=="admin")
        {
            res.status(401).json({
                success:false,
                messaage:"this is a protected route"
            })
        }
        next();
}

module.exports = isStudent;

const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req,res,next)=>{

    const token = req.body.token || req.cookies.token
    if(!token){
       res.status(401).json({
        success:false,
        message:"user not loged in"
       });
       return;
    };

    try{

        const decode = jwt.verify(token,process.env.SECRET_KEY);
        console.log(decode);
        req.data = decode;
        return next();
    }
    catch(error)
    {
        res.status(500).json({
            success:false,
            message:"invalid token"
        })
    }

}

module.exports = auth;

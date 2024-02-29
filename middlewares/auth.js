const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req,res,next)=>{

    const token = req.body.token;
    if(!token) throw new Error("user not signed in ");

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

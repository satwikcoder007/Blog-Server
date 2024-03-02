const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth =  async(req,res,next)=>{
 console.log('hello');
    const token = req.body.token || req.cookies.token
    console.log(token);
    if(!token){
       res.status(401).json({
        success:false,
        message:"user not loged in"
       });
       return;
    };

    try{
        console.log("inside-try")
        const key=process.env.SECRET_KEY;
        console.log(key);
        const decode = jwt.verify(token,key);
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

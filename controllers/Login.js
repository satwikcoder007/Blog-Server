const Register = require("../models/RegisterModel");

const Login=async(req,res)=>{
    try{
        const {email,password}=req.body
        
        if(!email){
            res.status(404).json({
                success: false,
                data: "can not find",
                message: "chodna naki",
              });  
        }

        const user=await Register.findOne({email})

        if(!user){
            res.status(404).json({
                success: false,
                data: "User does not exist",
                message: "chodna naki",
            })
        }

        if(user.password!==password){
           res.status(401).json({
            success: false,
            data: "Invalid Password",
            message: "chodna naki",
           })
        }
       

        res.status(200).json({
            success:true,
            data:user,
            message:"Correct"
        })

    }
    catch(error){

        console.log(error)

    }
}

module.exports=Login
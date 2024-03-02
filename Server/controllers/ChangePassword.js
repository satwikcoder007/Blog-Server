const Register=require("../models/RegisterModel");
const bcrypt=require("bcrypt");

const ChangePassword= async(req,res)=>{
    try {
        const {Password,ConfirmPassword}=req.body;
        console.log({Password,ConfirmPassword})
    if(Password!==ConfirmPassword){
        return res.status(401).json({
            success:false,
            message:"password not match"
        })
        
    }
  // hash the password and save in the db,
  

   const hashPassword= await bcrypt.hash(Password,10);
   const data=await Register.findOneAndUpdate({email:req.data.email},{password:hashPassword},{new:true});
   console.log(data);
   return res.status(200).json({
    success:true,
    message:"Password Saved Successfully"
   })
     } catch (error) {
         console.log(error);
         return res.status(500).json({
            success:false,
            message:"Password dont save"
         })
    }
}

module.exports = ChangePassword;
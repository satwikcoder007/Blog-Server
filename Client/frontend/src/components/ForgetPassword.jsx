import React, { useState } from "react";
import axios from "axios";
export default function ForgetPassword() {
    const [data,setData] = useState({
        userEmail:""
    })
    const handleInput = (event)=>{
        
        setData({...data,[event.target.name]:event.target.value});
        console.log(data);
    }
    const handleSubmit = async(e)=>{
      e.preventDefault();
      const parseData = await axios.post("/api/v1/mail",{...data},{ withCredentials: true });
      console.log(parseData);
      
    }
  return (
    <div className=" h-screen w-screen justify-center items-center flex">
      <div className="relative h-[400px] w-[500px] bg-rose-500 flex flex-col justify-center items-center">
        <div className=" absolute top-[50px]   text-white text-[25px] font-black">Enter your Registered Email Id here</div>
        <div className="flex justify-center items-center gap-2">
          <span  className=" text-white text-[20px]">Email</span>
          <input
            type="email"
            placeholder="Email"
            name="userEmail"
            value={data.userEmail}
            onChange={(event) => handleInput(event)}
            className=" text-black"
          />
        </div>
        <button
          className="absolute bottom-3 right-3 box-border px-[15px] py-[5px] text-white rounded-md bg-black"
          onClick={(e)=>handleSubmit(e)}
        >
          submit
        </button>
      </div>
    </div>
  );
}

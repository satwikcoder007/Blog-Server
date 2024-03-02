import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate();
  const [input,setInput] = useState({
    email:"",
    password:""
  })
  const handleInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const handleSubmit = async()=>{
    const res= await axios.put("/api/v1/login",{...input},{ withCredentials: true });
    console.log(res);
    props.closeSign();
    navigate("/loginSuccess")
    // props.loginSuccess();
  }
  return (
    <div className=" h-screen w-screen flex justify-center items-center">
      <div className=" relative  box-border h-[400px] w-[500px] bg bg-blue-400 text-white flex flex-col gap-2 p-2 justify-center items-center">
        <button
          className="absolute top-3 right-3 box-border px-[15px] py-[5px] text-white rounded-md bg-black"
          onClick={() => {
            props.closeSign();
          }}
        >
          close
        </button>
        <div className="flex justify-center items-center gap-2">
          <span>Email</span>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={(event) => handleInput(event)}
            className=" text-black"
          />
        </div>
        <div className="flex justify-center items-center gap-2">
          <span>Password</span>
          <input
            type="password"
            placeholder="******"
            name="password"
            value={input.password}
            onChange={(event) => handleInput(event)}
            className=" text-black"
          />
        </div>
        <div className=" text-black hover:cursor-pointer" onClick={()=>(navigate("/forgetpassword"))}>Forget Password?</div>
        <button
          className="absolute bottom-3 right-3 box-border px-[15px] py-[5px] text-white rounded-md bg-black"
          onClick={()=>handleSubmit()}
        >
          submit
        </button>
      </div>
    </div>
  );
}

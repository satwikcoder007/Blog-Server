import React, { useState } from "react";
import axios from "axios"
export default function Register(props) {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    user: "",
  });
  const handleInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
    console.log(input);
  };
  
  const handleSubmit = async()=>{
    const res= await axios.post("/api/v1//register",{...input})
    console.log(res);
       
  }
  return (
    <div className=" h-screen w-screen flex justify-center items-center">
      <div className=" relative box-border h-[400px] w-[500px] bg bg-orange-400 text-white flex flex-col gap-2 p-2 justify-center items-center">
        <button
          className="absolute top-3 right-3 box-border px-[15px] py-[5px] text-white rounded-md bg-black"
          onClick={() => {
            props.closeRegister();
          }}
        >
          close
        </button>
        <div className="flex justify-center items-center gap-2">
          <span>Name</span>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={input.name}
            onChange={(event) => handleInput(event)}
            className=" text-black"
          />
        </div>
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
        <div className="flex justify-center items-center gap-2">
          <span>User</span>
          <input
            type="text"
            placeholder="User"
            name="user"
            value={input.user}
            onChange={(event) => handleInput(event)}
            className=" text-black"
          />
        </div>
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

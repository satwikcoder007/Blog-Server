import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
export default function SetNewpassword() {
  const [password, setPassword] = useState({Password:"",ConfirmPassword:""});
  const navigate=useNavigate();
  const handleInput = (event) => {
    setPassword({ ...password, [event.target.name]: event.target.value });
  };
  const handleSubmit= async(e)=>{
    e.preventDefault();
    const data=await axios.post("/api/v1/newpassword",{...password});
    console.log(data);
    navigate('/');
  }
  return (
    <div><section>
    <div className="bg-white relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
      <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
        <div className="flex flex-col">
          <div>
            <h2 className="text-4xl text-black">Reset password</h2>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input value="https://jamstacker.studio/thankyou" type="hidden" name="_redirect"/>
          <div className="mt-4 space-y-6">
            <div className="col-span-full">
              <label className="block mb-3 text-sm font-medium text-gray-600"> Password   </label>
              <input onChange={(e)=>handleInput(e)} type="password" placeholder="******" name='Password' value={password.Password} className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"/>
            </div>
            <div className="col-span-full">
              <label className="block mb-3 text-sm font-medium text-gray-600"> Confirm passord   </label>
              <input  onChange={(e)=>handleInput(e)} type="password" placeholder="******" name='ConfirmPassword' className="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"/>
            </div>
  
            <div className="col-span-full">
              <button type="submit" className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"> Submit your request   </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
  </div>
  )
}

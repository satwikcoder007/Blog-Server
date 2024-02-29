import React, { useState } from "react";
import Navbar from "./Navbar";
import Register from "./Register";
import Login from "./Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [register, setRegister] = useState(0);
  const [sign, setSign] = useState(0);
  const openRegister = () => {
    setRegister(1);
  };
  const closeRegister = () => {
    setRegister(0);
  };
  const openSign = () => {
    setSign(1);
  };
  const closeSign = () => {
    setSign(0);
  };
  const registerSuccess = () => {
    toast.success("Register Success");
  };
  const loginSuccess = () => {
    toast.success("Login Success");
  };

  return (
    <div className=" h-screen w-screen relative overflow-x-hidden">
      <div className={sign || register ? " filter blur-lg" : ""}>
        <Navbar openRegister={openRegister} openSign={openSign}></Navbar>
      </div>
      <div className=" absolute top-0 left-0">
        {register ? (
          <Register
            closeRegister={closeRegister}
            registerSuccess={registerSuccess}
          ></Register>
        ) : (
          ""
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
      <div className=" absolute top-0 left-0">
        {sign ? (
          <Login 
          closeSign={closeSign} 
          loginSuccess={loginSuccess}
          ></Login>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

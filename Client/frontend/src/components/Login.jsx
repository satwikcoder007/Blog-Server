import React from "react";

export default function Login(props) {
  return (
    <div className=" h-screen w-screen flex justify-center items-center">
      <div className=" relative  box-border h-[400px] w-[500px] bg bg-blue-400 text-white">
        <button
          className="absolute top-3 right-3 box-border px-[15px] py-[5px] text-white rounded-md bg-black"
          onClick={() => {
            props.closeSign();
          }}
        >
          close
        </button>
      </div>
    </div>
  );
}

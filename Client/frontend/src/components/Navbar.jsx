import React from 'react'

export default function Navbar(props) {
  return (
    <div className='h-[100px] flex justify-center items-center bg-red-500 gap-4'>
      <button className=' box-border px-[15px] py-[5px] rounded-md bg-blue-500 text-white' onClick={()=>{props.openRegister()}}>Register</button>
      <button className=' box-border px-[15px] py-[5px] rounded-md bg-blue-500 text-white' onClick={()=>{props.openSign()}}>Log IN</button>
    </div>
  )
}

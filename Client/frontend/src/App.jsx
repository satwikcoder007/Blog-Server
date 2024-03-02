import React from 'react'
import Home from './components/Home'
import LoginSuccess from './components/LoginSuccess';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ForgetPassword from './components/ForgetPassword'
import SetNewpassword from './components/SetNewpassword';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/loginsuccess" element={<LoginSuccess/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>}/>
        <Route path='/newpassword' element={<SetNewpassword/>}/>
      </Routes>
    </BrowserRouter>
  )
}


"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  
  const notify = () =>{
    console.log("hello")
    toast("Login Successful")
  }
  return (
    <>
      <button onClick={notify} className=' rounded-2xl border-x-4 border-y-4 text-white  border-zinc-950 bg-slate-500  p-4 font-bold text-3xl '  >Login</button>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default page


"use client"
import { data } from 'autoprefixer';
import axios from 'axios'

import React, { useEffect, useState } from 'react'

const page = ({params}) => { 
    console.log(params.id);
    const { id }= params;

    const[users, setUsers]= useState([]);
 const getUsers =  async() =>{
 const { data }= await axios.get("https://jsonplaceholder.typicode.com/users/" + id);

  
  setUsers(data);
  
  }
  
   useEffect(()=>{
    getUsers()
   }, [])
  return (
<>
<h1 className='text-l  font-semibold'>{JSON.stringify(users)}</h1>
  
</>
  )
}

export default page

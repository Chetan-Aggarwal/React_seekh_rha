"use client"
import React, { createContext } from 'react'

export const MyContext = createContext()

const Context = ({children}) => {
    const username= "Chetan Aggarwal"

  return (
    <>
      <MyContext.Provider value={username}>
            {children}
      </MyContext.Provider>
    </>
  )
}

export default Context

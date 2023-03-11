import React from 'react'
import Navbar from './Navbar';
const Base = ({title = "Welcome to my website" , children}) => {
  return (
    <div>
      <Navbar/>

    {children}   
      
   </div>
  )
}

export default Base;
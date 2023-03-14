import React from 'react'
import Navbar from './Navbar';
import Footer from '../pages/Footer';
const Base = ({title = "Welcome to my website" , children}) => {
  return (
    <div>
      <Navbar/>
    {children}  
    <Footer/> 
   </div>
  )
}

export default Base;
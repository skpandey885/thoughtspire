import React from 'react'
import Base from "../components/Base";



const Home = () => {
  
  const converted = {
    width: "50px",
    border: "2px solid rgb(18, 150, 202)",
  }

  return (
   <Base>
 
<h1 className="m-5 text-5xl font-bold lowercase font-Sora">
          Home
    <div style={converted} className='mx-2'></div>
    </h1>
   </Base>
  )
}

export default Home
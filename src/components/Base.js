import React from 'react'

const Base = ({title = "Welcome to my website" , children}) => {
  return (
    <div className='container-fluid'>
        <h1 color='red'>This is header</h1>
    {children}     
     <h1 color='red'>This is footer</h1>
   
   </div>
  )
}

export default Base;
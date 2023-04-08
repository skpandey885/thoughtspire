import React from 'react'

const Comment = ({comment}) => {
  
  return (
 
  <div className="">
    <div className="px-3 py-3 m-10 bg-white rounded-2xl h-fit">
      <div className="flex items-center justify-center w-10 h-10 rounded-full">
      <img src="https://pluspng.com/img-png/user-png-icon-thin-line-user-icon-2232.png" alt="" />
      </div>
      <div className="mt-4">
        <p className="mt-4 text-gray-600 text-md">
       {comment.content}
        </p>
      
      </div>
    </div>
  </div>


    
  )
}

export default Comment
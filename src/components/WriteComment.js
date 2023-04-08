import React, { useState } from 'react'
import { createComment } from '../services/post-service';
import { getCurrentUserDetail, isLoggedIn } from '../auth';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

const WriteComment = ({post, setpost}) => {

    const [commentData, setcommentData] = useState({
        content:""
    })
    const navigate = useNavigate();
    const setComment = (value)=>{
        setcommentData({content: value});
    }


const handleSubmit = () =>{
if(commentData.content.trim() === ""){
    toast.info("Comment cannot be empty!")
    return;
}
    if(isLoggedIn()){
        let currentUser = getCurrentUserDetail();
        
        createComment(commentData, currentUser.id, post.postId)
        .then((data)=>{
         
           toast.success("Comment added!")
           setpost(
            {
                
                ...post,
                 comments:[...post.comments, data] 
            }
            
           );

           setcommentData({
            content:""
           })
        })
        .catch((error)=>{
            console.log(error);
        })

    }else{
       navigate("/auth/login")
       toast.info("Please login first!")
    }
     
}
    
    return (
 
          <div className="px-3 py-3 m-10 rounded-2xl h-fit">
            <div className="mt-4">
  
            
  <div className="relative w-full min-w-[200px]">
    <textarea
      className="peer h-full min-h-[100px] w-full resize-none 
      rounded-[7px] border border-blue-gray-200 border-t-transparent 
      bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 
      outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 
      placeholder-shown:border-t-blue-gray-200 focus:border-2
      focus:border-t-transparent focus:outline-0 disabled:resize-none
    disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "
      value={commentData.content}
      onChange={(e)=> setComment(e.target.value)}
    />
    <label className="before:content[' '] after:content[' ']
     pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none 
     text-[11px] font-normal leading-tight text-blue-gray-400 transition-all 
     before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border
      before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t 
      before:border-l before:border-blue-gray-200 before:transition-all 
      after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block
       after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r 
       after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm
        peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 
        peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent 
        peer-focus:text-[11px] peer-focus:leading-tight  peer-focus:before:border-t-2 
        peer-focus:before:border-l-2  peer-focus:after:border-t-2 peer-focus:after:border-r-2
       peer-disabled:text-transparent peer-disabled:before:border-transparent
          peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Write a comment!
    </label>
  </div>
</div>



            
            
<button
  className="mt-4 middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
  data-ripple-light="true"
  onClick={handleSubmit}
>
Submit
</button>

          </div>
         

      
      
          
        )
}

export default WriteComment
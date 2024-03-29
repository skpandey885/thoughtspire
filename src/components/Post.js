import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Post.css"
import { getCurrentUserDetail, isLoggedIn } from '../auth'



const Post = ({post, deletePost}) => {

  const [user, setuser] = useState()
  const [login, setlogin] = useState()

  useEffect(() => {
   setuser(getCurrentUserDetail())
   setlogin(isLoggedIn())
  }, [])
  
const cleanTags = (myText)=>{
        let html = myText
        let div = document.createElement("div");
        div.innerHTML = html;
        let text = div.textContent || div.innerText || "";

        return text;
    }

 function convertDate() {
  let date = new Date(post.addedDate).toLocaleDateString();
  return date
 }   

 function getReadingTime() {

  let contentLength = String(cleanTags(post.content)).split(" ").length;
  let minutes = Math.ceil(contentLength/60.0);
  let text = (minutes===1) ? "minute" : "minutes";
  return minutes+" "+text;

 }   


    return (
<>
        <div
        className="transition-all myCard relative block p-4 overflow-hidden no-underline border  border-gray-100 rounded-lg w-[80%] sm:p-6 lg:p-8 mx-auto my-5 transform hover:scale-[1.009]"
      >
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                {post.title}
            </h3>
            <p className="mt-1 text-xs font-medium text-gray-600">{post.user.name}</p>
          </div>
          <div className="hidden sm:block sm:shrink-0">
            <img
              alt="Paul Clapton"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              className="object-cover w-16 h-16 rounded-lg shadow-sm"
            />

          </div>
        </div>
        <div className="mt-4">
          <p className="max-w-[40ch] text-sm text-gray-500">
            
           {cleanTags(post.content).substring(0, Math.min(50, cleanTags(post.content).length))}...

          </p>
        </div>
        <dl className="flex gap-4 mt-6 sm:gap-6">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">Published</dt>
            <dd className="text-xs text-gray-500">{convertDate()}</dd>
          </div>
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">Reading time</dt>
            <dd className="text-xs text-gray-500">{
            getReadingTime()
            }</dd>
          </div>
        </dl>
       <Link to={"/posts/" + (post.postId)}>
       <button type="button" className="float-right px-3 py-2 m-2 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">Read more..</button>
       </Link> 
        {
          login && user.id === post.user.id ? (<button onClick={ () => {
          deletePost(post.postId)
          }} type="button" className="float-right px-3 py-2 m-2 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800">Delete</button>): ""
        }
    
      {/* <button type="button" class="text-white bg-gradient-to-r
             from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br 
             focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 
             font-medium rounded-lg text-sm px-3 py-2 text-center m-2 float-right" >Go</button>  */}
      </div>
      
</>    

    )
}

export default Post
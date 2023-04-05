import React from 'react'
import Base from '../components/Base'
import { useParams } from 'react-router-dom'
import { loadPostByID } from '../services/post-service'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'

const PostPage = () => {
  
  const {postId} = useParams()

  const [date, setDate] = useState('')
  const [post, setpost] = useState({
    addedDate: '',
    category:'',
    comments: [],
    content:'',
    imageName: '',
    postId: '',
    title: '',
    user: {}
  });
  
  function formatDate() {
    let date = new Date(post.addedDate).toLocaleDateString();
    setDate(date);
  }

  useEffect(() => {
    formatDate();
  }, [(post.addedDate)])
  

  useEffect(() => {
       
    loadPostByID(postId).then((data)=>{
      setpost(data);
       }).catch((error)=>{
          console.log(error);
          toast.error("Post could not load!")
       });
 
  }, [])

  // console.log(post);
  return (
   <Base>
   <div className="mt-3 ml-4">
   <Link to="/">Home</Link> / {post &&  ( <Link to=""> {post.title} </Link>)}
   </div>
  <div className="m-[30px] h-[100%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   

    <div className="p-2 text-sm font-Sora text-gray-100 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:bg-gray-800 h-[60px]">
     
      <div className="ml-[2%]">
         Posted by <b>{post.user.name}</b> on <b>{date} </b>
        
      </div>
      
      <div className="ml-[2%] text-blue-300">
       /{post.category.categoryTitle}    
      </div>

  </div>
 


  <div id="defaultTabContent">
    <div
      className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
      id="about"
      role="tabpanel"
      aria-labelledby="about-tab"
    >
    
      <p className="mb-3" dangerouslySetInnerHTML={{__html: post.content}}>
      </p>
    
{/* <div className="image-container">
  <img src={BASE_URL + "/post/image/" + post.imageName} alt="" />
  </div> */}
    
   {/* <a
        href="#"
        className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
      >
        Learn more
        <svg
          className="w-6 h-6 ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </a> */}


</div>
</div>
</div>
</Base>



  )
}

export default PostPage
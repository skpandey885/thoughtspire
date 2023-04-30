import React, { useEffect, useState } from 'react'
import Base from '../components/Base'
import { getCurrentUserDetail } from '../auth'
import { deletePostService, loadPostByUserID } from '../services/post-service'
import { toast } from 'react-toastify';
import Post from '../components/Post';
import { Link } from 'react-router-dom';

const Dashboard = () => {

const [posts, setPosts] = useState([])

useEffect(() => {
loadPostData()
}, [])



function loadPostData() {
const userId = getCurrentUserDetail().id
loadPostByUserID(userId)
.then( 
  (data) => {
 setPosts([...(data.content)])
  }
)
.catch((error) => {
  console.log(error);
  toast.error("Posts could not load!")
})
}

const converted = {
  width: "40px",
  border: "2px solid rgb(18, 150, 202)",
}


const deletePost = (postId) => {
  
  deletePostService(postId)
  .then( 
    (data) => {
     toast.success("Post Deleted!")
     loadPostData();
    }
  )
  .catch((error) => {
    console.log(error);
    toast.error("Posts did not delete!")
  })
  
}

  return (
   <Base>

<h1 className="m-5 text-5xl font-bold lowercase font-Sora">
          Your Posts
    <div style={converted} className='mx-4'></div>
    </h1>
    <hr/>
    
{
  posts.length>0 ? posts.map((currPost, index) =>{
    return (
      <Post post={currPost} key ={index} deletePost={deletePost} />
    )
  }) : (<p style={{ textAlign: 'center' }}>


  <b className='font-Sora'>You have no posts. &ensp; 
  <Link to="/posts/create" className='text-blue-500'>Post Now!</Link>
   </b>
</p>)

}

   </Base>
  )
}

export default Dashboard
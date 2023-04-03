import React, { useState } from 'react'
import Base from "../components/Base";
import { useEffect } from 'react';
import { loadAllPosts } from '../services/post-service';
import Post from '../components/Post';
import Pagination from '../components/Pagination';
import { toast } from 'react-toastify';

const Trending = () => {
 

  const[postContent, setPostContent] =useState(
    {
    content: [],
    totalPages: '',
    totalElements: '',
    pageSize: '',
    lastPage: false,
    pageNumber: ''
}
    
    )

  useEffect(() => {
    // load all posts from user
    loadAllPosts(0,5) // initially we will be at page number 0 and total pages we will keep as 5
    .then( 
      (data) => {
        console.log(data);
        setPostContent(data);
      }
    )
    .catch((error) => {
      console.log(error);
      toast.error("Posts could not load!")
    })// initially we will be at page number 0 and total pages we will keep as 5
   
  }, [])

  
  const converted = {
    width: "50px",
    border: "2px solid rgb(18, 150, 202)",
  }

  return (
    <Base >

<h1 className="m-5 text-5xl font-bold lowercase font-Sora">
          Trending
    <div style={converted} className='mx-2'></div>
    </h1>

 {
  postContent.content.map((post)=>(
        <Post post={post} key = {post.postId}/>
  ))
 }

<Pagination postContent={postContent} setPostContent={setPostContent}/>
    </Base>
  )
}

export default Trending
import React, { useState } from 'react'
import Base from "../components/Base";
import { useEffect } from 'react';
import {  loadPostByCategory } from '../services/post-service';
import Post from '../components/Post';
import { toast } from 'react-toastify';
import FilterByCategory from '../components/FilterByCategory';
import { useParams } from 'react-router-dom';
const CategoryPage = () => {
 
    const {categoryId, categoryTitle} = useParams()
  
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
    loadPostByCategory(categoryId) // initially we will be at page number 0 and total pages we will keep as 5
    .then( 
      (data) => {
        setPostContent(data);
      }
    )
    .catch((error) => {
      console.log(error);
      toast.error("Posts could not load!")
    })// initially we will be at page number 0 and total pages we will keep as 5
   
  }, [categoryId])


 /* const changePage = (pageNumber = 0 , pageSize = 5) => {
          
    if(pageNumber<0 || pageNumber>=(postContent.totalPages)){
      return;
    }
    
    loadAllPosts(pageNumber, pageSize) // initially we will be at page number 0 and total pages we will keep as 5
    .then( 
      (data) => {
        
         setPostContent({
        content: [...postContent.content, ...data.content],
        totalPages: data.totalPages,
        totalElements: data.totalElements,
        pageSize: data.pageSize,
        lastPage: data.lastPage,
        pageNumber: data.pageNumber

         });


        //  window.scroll(0,0); // Every time it reloads it will start from top of the page.
      }
    )
    .catch((error) => {
      console.log(error);
      toast.error("Posts could not load!")
    })
  }
  

   useEffect(() => {
  changePage(currentPage);
  }, [currentPage])
  

  
  
  
  
  */
  

  
  const converted = {
    width: "50px",
    border: "2px solid rgb(18, 150, 202)",
  }


  return (
    <Base>
    
<h1 className="m-5 text-5xl font-bold lowercase font-Sora">
          {categoryTitle}
<div style={converted} className='mx-2'></div>
</h1>
    <FilterByCategory/>
 {
    postContent.content && postContent.content.map((post)=>(
    <Post post={post} key = {post.postId}/>
  ))
 }
 
{postContent.content.length<=0 ? <h1 className='text-[20px] font-Sora m-5' style={{ textAlign: 'center' }}>No posts available</h1> : ""}

    </Base>
  )
}

export default CategoryPage
import React, { useState } from 'react'
import Base from "../components/Base";
import { useEffect } from 'react';
import { deletePostService, loadAllPosts } from '../services/post-service';
import Post from '../components/Post';
import { toast } from 'react-toastify';
import InfiniteScroll from 'react-infinite-scroll-component';
import FilterByCategory from '../components/FilterByCategory';


const Trending = () => {
 
  const[currentPage, setCurrentPage] =useState(0)
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
      loadPostData();
    }, [])

    function loadPostData() {
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

    

  const changePage = (pageNumber = 0 , pageSize = 5) => {
          
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
  

  
  const converted = {
    width: "50px",
    border: "2px solid rgb(18, 150, 202)",
  }

  const changePageInfinite = ()=> {
    console.log("Page Changed!");
    setCurrentPage(currentPage+1)
  }

  return (
    <Base >

<h1 className="m-5 text-5xl font-bold lowercase font-Sora">
          Trending
  <div style={converted} className='mx-2'></div>
    </h1>

  <FilterByCategory/>
<InfiniteScroll
  dataLength={postContent.content.length}
  next = {changePageInfinite}
  hasMore = {!postContent.lastPage}
  loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
>
  

 {
  postContent.content.map((post)=>(
        <Post post={post} key = {post.postId} deletePost={deletePost}/>
  ))
 }

</InfiniteScroll>

      {/* We have implemented infinite scroll, so we have commented the pagination component! */}
   
   {/* <Pagination postContent={postContent} setPostContent={setPostContent}/> */}

   
    </Base>
  )
}

export default Trending
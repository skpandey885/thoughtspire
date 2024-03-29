import Base from '../components/Base'
import {loadAllCategories} from "../services/category-service"
import React, { useState,  useEffect , useRef} from 'react'
import JoditEditor from 'jodit-react';
import {toast} from 'react-toastify';
import { createPostService, uploadFile } from '../services/post-service';
import { getCurrentUserDetail } from '../auth';
import { useNavigate } from 'react-router-dom';



const CreatePost = () => {

  const navigate  = useNavigate()
const [currentUser, setcurrentUser] = useState(undefined)
  const [categories, setcategories] = useState([]);
  const [postData, setPostData] = useState({
    title :'',
    categoryId: '',
    content:''
  }); 
   
  const [file, setFile] = useState(null)
  
  const editor = useRef(null);



  const handleFileChange = (event) =>{
    setFile(event.target.files[0])
  }

  // field change function
  const fieldChange = (event) => {
    if(event.target.name === "categoryId"){  
      const idOfCategory = findId(event.target.value)
      setPostData({...postData, [event.target.name] : idOfCategory })
    }else{
    setPostData({...postData, [event.target.name] : event.target.value})
    }

  }
  function findId(title) {
   for (let index = 0; index < categories.length; index++) {
    if(title === (categories[index].categoryTitle)){
      return (categories[index].categoryId);
    }
  }
        return -1;
  }

  const contentFileChanged = (data) =>{
    setPostData({...postData, 'content': data})
  }
  
  useEffect(() => {
      setcurrentUser(getCurrentUserDetail())
      loadAllCategories().then((data)=>{
      console.log(data);
      setcategories(data);
  }).catch((error) =>{
      console.log(error);
  })  

  }, [])
  
  // create post function
  const createPost=(event) =>{
   event.preventDefault();

   if (postData.title.trim() === '') {
    toast.error("post  title is required !!")
    return;
}

if (postData.content.trim() === '') {
    toast.error("post content is required !!")
    return
}


if (postData.categoryId === '' || postData.categoryId === -1) {
    toast.error("select some category !!")
    return;
}

// only images are allowed
if(file!==null){
 let fileType = String(file.type).split("/")[0]
 
 if(fileType!=="image"){
  toast.error("Please upload only images!")
  return }
 
}



// submit the form to server

postData['userId'] = currentUser.id;

createPostService(postData).then(data => {

  if(file){
  uploadFile(file, data.postId).then(data =>{
    console.log("Image Uploaded");
  }).catch((error) =>{
    toast.error("Cannot upload Image!");
    console.log(error);
  });
}

navigate("/user/dashboard");
toast.info("Post Created!")

}).catch((error) =>{
  toast.error("Error Found!");
  console.log(error);
});
  

  }
  const converted = {
    width: "50px",
    border: "2px solid rgb(18, 150, 202)",
  }
  

  return (
    <Base>

<h1 className="m-5 text-5xl font-bold lowercase font-Sora">
         Create a Post
    <div style={converted} className='mx-2'></div>
    </h1>

  <div className="flex items-center justify-center w-screen h-screen bg-white mb-[50px] mt-[50px]">
    {/* COMPONENT CODE */}
    <div className="container px-4 mx-auto my-4 lg:px-20">
      <div className="w-full p-8 mr-auto shadow-2xl md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 rounded-2xl spx:mb-[50vh] spx:mt-[60vh]">
        <div className="flex">
          <h1 className="text-5xl font-bold lowercase ">
           what's in your <br /> mind? 💡
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-2 mt-5">
          <input
            className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Title"
            name='title'
            onChange={fieldChange}
          />
          <select
            className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
            name='categoryId'
            onChange={fieldChange}
            defaultValue="Select a Category"
            >
        <option disabled key = "0" className='text-gray-100'>Select a Category</option>

       { categories.map((category) => (
            <option key = {category.categoryId} value={category.categoryTitle}>{category.categoryTitle}</option>
          ))
        } 
      
          </select>
      
      
        </div>
        <div className="my-4">
          <JoditEditor ref={editor} value={postData.content} onChange={contentFileChanged} className="w-full mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"/>
        </div>


       <div className="mb-3">
    
    <input
    className="rounded-2xl cursor-pointer relative m-0 block w-full min-w-0 flex-auto border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-blue-500 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary px-2" 
    type="file"
    id="formFile"
    onChange={handleFileChange}
  />
</div>


        <div className="w-1/2 my-2 lg:w-1/4">
          <button onClick={createPost}
            className="w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase bg-blue-900 rounded-lg focus:outline-none focus:shadow-outline"
          >
           Post
          </button>
        </div>
      </div>
      
      <div className="w-full px-8 py-12 ml-auto bg-blue-900 lg:-mt-96 lg:w-2/6 rounded-2xl mb-[100px] h-[50vh] spx:hidden">
        <div className="flex flex-col text-white ">
          <h1 className="my-4 text-4xl font-bold uppercase ">
            Drop in our office
          </h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt arcu diam, eu feugiat felis fermentum id. Curabitur vitae
            nibh viverra, auctor turpis sed, scelerisque ex.
          </p>
        
  </div>
  
  </div>
  </div>
  </div>
  

    </Base>
  )
}

export default CreatePost
import React, { useEffect, useRef, useState } from 'react'
import Base from '../components/Base'
import { useNavigate, useParams } from 'react-router-dom'
import { getCurrentUserDetail } from '../auth'
import { loadPostByID, updatePostService } from '../services/post-service'
import { toast } from 'react-toastify'
import JoditEditor from 'jodit-react'
import { loadAllCategories } from '../services/category-service'

const UpdatePost = () => {

    const {postID} = useParams() 
    const [user, setuser] = useState()
    const navigate = useNavigate()
    const [post, setpost] = useState(null)
    const [categories, setcategories] = useState([]);
    const editor = useRef(null);
    
    useEffect(() => {

        loadAllCategories().then((data)=>{
            console.log(data);
            setcategories(data);
        }).catch((error) =>{
            console.log(error);
        })  


     setuser(getCurrentUserDetail())
     loadPostByID(postID)
     .then((data) => {
       setpost({...data})
     })
    .catch((err) => {
          console.log(err)
    })

    }, [])
    

    useEffect(() => {
        if(post){
            console.log(post);
         if(post.user.id === user.id){
         
        }else{
            navigate("/")
            toast.error("You are not authorized to update this post!")
        }
    }
    
   
    }, [post])


    const handleChange=(event, fieldName)=>{
        if(fieldName==='imageName'){
            setpost({...post, [fieldName]: event.target.files[0].name})
        }else{
            setpost({...post, [fieldName]: event.target.value})
        }
    }

   
    
    /**
     * The function handles updating a post and displays a success or error message using toast
     * notifications.
     */
    const handleUpdate = ()=>{
        console.log(post);

        updatePostService(postID, post).then((data)=>{
       
            toast.success("Post Updated Successfully!")
            navigate("/")
        }).catch((error) =>{
            console.log(error);
            toast.error("Error in updating post!")
        })
    }

    const handleChangeCategory = (event)=>{
        let flag = 0;
        categories.map((currCat) => {
            if(currCat.categoryTitle === event.target.value){
                setpost({...post, category: currCat})
                flag = 1;
            }
        })
    
        if(flag === 0){
            console.log("Could not find category!");
        }
      
    }

    const updateHTML = ()=>{
        return (
            <div className="flex items-center justify-center w-screen h-screen bg-white mb-[50px] mt-[50px]">
                {/* COMPONENT CODE */}
                <div className="container px-4 mx-auto my-4 lg:px-20">
                  <div className="w-full p-8 mr-auto shadow-2xl md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 rounded-2xl spx:mb-[50vh] spx:mt-[60vh]">
                    <div className="flex">
                      <h1 className="text-5xl font-bold lowercase ">
                       Update your post <br/> Below 🚀
                      </h1>
                    </div>
                    <div className="grid grid-cols-1 gap-2 mt-5">
                      <input
                        className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Title"
                        name='title'
                        onChange={(event) => handleChange(event, 'title')}
                        value={post.title}
                      />
                      <select
                        className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
                        name='categoryId'
                        onChange={ (event) => handleChangeCategory(event)}
                        defaultValue={post.category.categoryTitle}
                        >
                    <option disabled key = "0" className='text-gray-100'>Select a Category</option>
            
                   { categories.map((category) => (
                        <option key = {category.categoryId} value={category.categoryTitle}>{category.categoryTitle}</option>
                      ))
                    } 
                  
                      </select>
                  
                    </div>
                    <div className="my-4">
                      <JoditEditor ref={editor} value={post.content} onChange={(newContent) => setpost({...post, content:newContent})} className="w-full mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"/>
                    </div>
        
                   <div className="mb-3">
                
                <input
                className="rounded-2xl cursor-pointer relative m-0 block w-full min-w-0 flex-auto border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-blue-500 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary px-2" 
                type="file"
                id="formFile"
                onChange={(event) => handleChange(event, "imageName")}
              />
            </div>
            
            
                    <div className="w-1/2 my-2 lg:w-1/4">
                      <button onClick={() => handleUpdate()}
                        className="w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase bg-blue-900 rounded-lg focus:outline-none focus:shadow-outline"
                      >
                       Update
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
              </div>)
    }

    
  return (
<Base>
<div className="container">
    {post && updateHTML()}
</div>
</Base>

  )
}

export default UpdatePost
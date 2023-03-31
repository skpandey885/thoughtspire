import Base from '../components/Base'
import {loadAllCategories} from "../services/category-service"
import React, { useState,  useEffect , useRef} from 'react'
import JoditEditor from 'jodit-react';


const CreatePost = () => {

  const [categories, setcategories] = useState([]);
  const editor = useRef(null);
	const [content, setContent] = useState('');



  
    useEffect(() => {
      loadAllCategories().then((data)=>{
      console.log(data);
      setcategories(data);
  }).catch((error) =>{
      console.log(error);
  })  

  }, [])
  

  return (
    <Base>


  <div className="flex items-center justify-center w-screen h-screen bg-white mb-[100px] mt-[150px]">
    {/* COMPONENT CODE */}
    <div className="container px-4 mx-auto my-4 lg:px-20">
      <div className="w-full p-8 mr-auto shadow-2xl md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 rounded-2xl spx:mt-[70vh] spx:mb-[10vh]">
        <div className="flex">
          <h1 className="text-5xl font-bold lowercase font-Sora">
           what's in your <br /> mind? 💡
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-2 mt-5">
          <input
            className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Title"
          />
          <select
            className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
            >
 <option  key ="0" className='text-gray-100'>Select a Category</option>

       { categories.map((category) => (
            <option key = {category.categoryId} value={category.categoryTitle}>{category.categoryTitle}</option>
          ))
        } 
      
          </select>
      
          <input
            className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
          />
          <input
            className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Phone"
          />
        </div>
        <div className="my-4">

          <JoditEditor ref={editor} value={content} onChange={newContent => setContent(newContent)} className="w-full mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline"/>
        </div>
        <div className="w-1/2 my-2 lg:w-1/4">
          <button
            className="w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase bg-blue-900 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Send Message
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
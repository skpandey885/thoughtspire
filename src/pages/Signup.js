import React, { useState, useEffect } from 'react'
import Base from "../components/Base";
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../services/user-services';
import {toast} from 'react-toastify';



const Signup = () => {
 
 const errorMessages = ["Fullname should be of atleast 4-16 characters!",
 "Enter a valid email address!" ,"Password cannot be less than 8 Characters!", "Passwords do not match!", "About cannot be Empty!"
];
  
  const navigate = useNavigate(); 
  const [toURL, settoURL] = useState("")
  
  const [error, setError] = useState({
    errors : {},
    isError : false
})

const [isValid, setIsValid] = useState({
  name:  true,
  email : true,
  password : true,
  about : true
});

const [data, setdata] = useState({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  about : ""
});


const invalidClass = (value)=>{
  if(value  === "confirmPassword"){
    return (data.confirmPassword === data.password)? "hidden" : "block";
  }else if(value  === "password"){
    return (data.password.length>=8)? "hidden" : "block";
  }
}

const handleChange = (event, property) =>{
  setIsValid({...isValid, [property] : event.target.validity.valid})
  setdata({...data, [property] : event.target.value})
 }
 
const submitForm = (event) => {
  
for (const key in data) {
  let value = data[key].trim()
  if(value===""){
    toast.info("Please fill the complete Information!")
    return
  }
}

  
  if( data.password !== data.confirmPassword ){
   toast.info("Please fill the complete Information!")
    return
  }
    const newData = {
      name: data.name.trim(),
      email : data.email.trim(),
      password : data.password.trim(),
      about : data.about.trim()
    }
    
      signUp(newData).then((response) =>{
        settoURL("/");
        console.log(response);
        toast.success("User Registered Successfully!")
      })
      .catch((errorObj) => {
        console.log(errorObj);
       
        setError({
          errors: errorObj,
          isError : true
         })
      })

  }
  
  
  useEffect(() => { 
    
    if(error.isError){
    var errorRec = error.errors.response.data
     Object.values(errorRec).forEach((element) => {
       toast.info(element)
       })
         
      settoURL("#");
    }
    
    
  }, [error])

useEffect(() => {
  if (toURL) {
    navigate(toURL);
  }
}, [toURL, navigate]);

  

  return (
    <Base>
   <>
  {/* component */}
  <div className="relative bg-white lg:py-20">
    <div
      className="flex flex-col items-center justify-between pt-0 pb-0 pl-10 pr-10 mt-0 mb-0 ml-auto mr-auto max-w-7xl xl:px-5 lg:flex-row"
    >
      <div className="flex flex-col items-center w-full pt-5 pb-20 pl-10 pr-10 lg:pt-20 lg:flex-row">
        <div className="relative w-full max-w-md bg-cover lg:max-w-2xl lg:w-7/12">
          <div className="relative flex flex-col items-center justify-center w-[95%] h-[95%] lg:pr-10 -ml-[100px] -mt-[180px]">
            <img
              src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png"
              className="hidden lg:block"
              alt="vector"
            />
          </div>
        </div>
        <div className="relative z-10 mt-20 mb-0 ml-0 mr-0 w-fullmax-w-2xl lg:mt-0 lg:w-5/12">
          <div
            className="relative z-10 flex flex-col items-start justify-start p-10 -mt-[60px] bg-white shadow-2xl rounded-xl"
          >
            <p className="w-full text-4xl leading-snug text-center font-small font-Sora ">
              Sign up for an account
            </p>
            
            <form className="relative w-full mt-6 mb-0 ml-0 mr-0 space-y-8">
              <div className="relative">
                <label
                  className="absolute pt-0 pb-0 pl-1 pr-1 mb-0 ml-2 mr-0 -mt-3 font-medium text-gray-600 bg-white"
                  htmlFor='full-name'
                >
                 Full Name
                </label>
                
                <input
                  placeholder="John Melvin"
                  onChange={(e) => handleChange(e, "name")}
                  type="text"
                  className="block w-full p-3 mb-0 ml-0 mr-0 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md pb- focus:outline-none focus:border-black"
                  id='full-name'
                required
                />
  
               
           {!isValid.name && 
             <span className="flex items-center mt-1 ml-1 text-xs font-medium tracking-wide text-red-500">
              {errorMessages[0]}
              </span> 
            }
                                
              </div>
              <div className="relative">
                <label className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 font-medium text-gray-600 bg-white"
                 htmlFor='email'
                >
                  Email
                </label>
                <input
                  placeholder="123@ex.com"
                  onChange={(e) => handleChange(e, "email")}
                  type="email"
                  id='email'
                  className="block w-full p-3 mt-2 mb-0 ml-0 mr-0 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  required
               />

{!isValid.email && 
             <span className="flex items-center mt-1 ml-1 text-xs font-medium tracking-wide text-red-500">   
              {errorMessages[1]}
                </span>
                }
              </div>
              <div className="relative">
                <label
                  className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 font-medium text-gray-600 bg-white"
                  htmlFor='password'
                >
                  Password
                </label>
                <input
                  placeholder="Password"
                  type="password"
                  id='password'
                  onChange={(e) => handleChange(e, "password")}
                  className="block w-full p-3 mt-2 mb-0 ml-0 mr-0 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  required
                />
                
                {!isValid.password && 
             <span className="flex items-center mt-1 ml-1 text-xs font-medium tracking-wide text-red-500">
                    {errorMessages[2]}
                  </span>
}
                </div>
              <div className="relative">
                <label
                  className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 font-medium text-gray-600 bg-white"
                  htmlFor='confirm-password'
                >
                  Confirm Password
                </label>
                <input
                  placeholder="Password"
                  type="password"
                  id='confirm-password'
                  onChange={(e) => handleChange(e, "confirmPassword")}
                  className="block w-full p-3 mt-2 mb-0 ml-0 mr-0 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  required
               />
                   
                <span className={`flex items-center mt-1 ml-1 text-xs font-medium tracking-wide text-red-500 ${invalidClass("confirmPassword")}`}>
                    {errorMessages[3]}
                    </span>
              </div>

              <div className="relative">
                <label className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 font-medium text-gray-600 bg-white"
                  htmlFor='about'
                >
                  About
                </label>
                <textarea
                  placeholder="About"
                  id='about'
                  onChange={(e) => handleChange(e, "about")}
                  type="text"
                  className="block w-full p-3 mt-2 mb-0 ml-0 mr-0 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  required
               />

              {!isValid.about && 
             <span className="flex items-center mt-1 ml-1 text-xs font-medium tracking-wide text-red-500">          
                     {errorMessages[4]}
                </span>
                }
                
              </div>

              
              <div className="relative">
                
                <Link
                type='submit'
                to={toURL}
                onClick={(e)=> submitForm(e)}
                  className="inline-block w-full pt-4 pb-4 pl-5 pr-5 text-xl font-medium text-center text-white no-underline transition duration-200 bg-indigo-500 rounded-lg hover:bg-indigo-600 ease"
                >
                  Submit
                </Link>
              </div>
            </form>
          </div>
          <svg
            viewBox="0 0 91 91"
            className="absolute top-0 left-0 z-0 w-32 h-32 -mt-[100px] -ml-12 text-yellow-300 fill-current"
          >
            <g stroke="none" strokeWidth={1} fillRule="evenodd">
              <g fillRule="nonzero">
                <g>
                  <g>
                    <circle cx="3.261" cy="3.445" r="2.72" />
                    <circle cx="15.296" cy="3.445" r="2.719" />
                    <circle cx="27.333" cy="3.445" r="2.72" />
                    <circle cx="39.369" cy="3.445" r="2.72" />
                    <circle cx="51.405" cy="3.445" r="2.72" />
                    <circle cx="63.441" cy="3.445" r="2.72" />
                    <circle cx="75.479" cy="3.445" r="2.72" />
                    <circle cx="87.514" cy="3.445" r="2.719" />
                  </g>
                  <g transform="translate(0 12)">
                    <circle cx="3.261" cy="3.525" r="2.72" />
                    <circle cx="15.296" cy="3.525" r="2.719" />
                    <circle cx="27.333" cy="3.525" r="2.72" />
                    <circle cx="39.369" cy="3.525" r="2.72" />
                    <circle cx="51.405" cy="3.525" r="2.72" />
                    <circle cx="63.441" cy="3.525" r="2.72" />
                    <circle cx="75.479" cy="3.525" r="2.72" />
                    <circle cx="87.514" cy="3.525" r="2.719" />
                  </g>
                  <g transform="translate(0 24)">
                    <circle cx="3.261" cy="3.605" r="2.72" />
                    <circle cx="15.296" cy="3.605" r="2.719" />
                    <circle cx="27.333" cy="3.605" r="2.72" />
                    <circle cx="39.369" cy="3.605" r="2.72" />
                    <circle cx="51.405" cy="3.605" r="2.72" />
                    <circle cx="63.441" cy="3.605" r="2.72" />
                    <circle cx="75.479" cy="3.605" r="2.72" />
                    <circle cx="87.514" cy="3.605" r="2.719" />
                  </g>
                  <g transform="translate(0 36)">
                    <circle cx="3.261" cy="3.686" r="2.72" />
                    <circle cx="15.296" cy="3.686" r="2.719" />
                    <circle cx="27.333" cy="3.686" r="2.72" />
                    <circle cx="39.369" cy="3.686" r="2.72" />
                    <circle cx="51.405" cy="3.686" r="2.72" />
                    <circle cx="63.441" cy="3.686" r="2.72" />
                    <circle cx="75.479" cy="3.686" r="2.72" />
                    <circle cx="87.514" cy="3.686" r="2.719" />
                  </g>
                  <g transform="translate(0 49)">
                    <circle cx="3.261" cy="2.767" r="2.72" />
                    <circle cx="15.296" cy="2.767" r="2.719" />
                    <circle cx="27.333" cy="2.767" r="2.72" />
                    <circle cx="39.369" cy="2.767" r="2.72" />
                    <circle cx="51.405" cy="2.767" r="2.72" />
                    <circle cx="63.441" cy="2.767" r="2.72" />
                    <circle cx="75.479" cy="2.767" r="2.72" />
                    <circle cx="87.514" cy="2.767" r="2.719" />
                  </g>
                  <g transform="translate(0 61)">
                    <circle cx="3.261" cy="2.846" r="2.72" />
                    <circle cx="15.296" cy="2.846" r="2.719" />
                    <circle cx="27.333" cy="2.846" r="2.72" />
                    <circle cx="39.369" cy="2.846" r="2.72" />
                    <circle cx="51.405" cy="2.846" r="2.72" />
                    <circle cx="63.441" cy="2.846" r="2.72" />
                    <circle cx="75.479" cy="2.846" r="2.72" />
                    <circle cx="87.514" cy="2.846" r="2.719" />
                  </g>
                  <g transform="translate(0 73)">
                    <circle cx="3.261" cy="2.926" r="2.72" />
                    <circle cx="15.296" cy="2.926" r="2.719" />
                    <circle cx="27.333" cy="2.926" r="2.72" />
                    <circle cx="39.369" cy="2.926" r="2.72" />
                    <circle cx="51.405" cy="2.926" r="2.72" />
                    <circle cx="63.441" cy="2.926" r="2.72" />
                    <circle cx="75.479" cy="2.926" r="2.72" />
                    <circle cx="87.514" cy="2.926" r="2.719" />
                  </g>
                  <g transform="translate(0 85)">
                    <circle cx="3.261" cy="3.006" r="2.72" />
                    <circle cx="15.296" cy="3.006" r="2.719" />
                    <circle cx="27.333" cy="3.006" r="2.72" />
                    <circle cx="39.369" cy="3.006" r="2.72" />
                    <circle cx="51.405" cy="3.006" r="2.72" />
                    <circle cx="63.441" cy="3.006" r="2.72" />
                    <circle cx="75.479" cy="3.006" r="2.72" />
                    <circle cx="87.514" cy="3.006" r="2.719" />
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <svg
            viewBox="0 0 91 91"
            className="absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-indigo-500 fill-current"
          >
            <g stroke="none" strokeWidth={1} fillRule="evenodd">
              <g fillRule="nonzero">
                <g>
                  <g>
                    <circle cx="3.261" cy="3.445" r="2.72" />
                    <circle cx="15.296" cy="3.445" r="2.719" />
                    <circle cx="27.333" cy="3.445" r="2.72" />
                    <circle cx="39.369" cy="3.445" r="2.72" />
                    <circle cx="51.405" cy="3.445" r="2.72" />
                    <circle cx="63.441" cy="3.445" r="2.72" />
                    <circle cx="75.479" cy="3.445" r="2.72" />
                    <circle cx="87.514" cy="3.445" r="2.719" />
                  </g>
                  <g transform="translate(0 12)">
                    <circle cx="3.261" cy="3.525" r="2.72" />
                    <circle cx="15.296" cy="3.525" r="2.719" />
                    <circle cx="27.333" cy="3.525" r="2.72" />
                    <circle cx="39.369" cy="3.525" r="2.72" />
                    <circle cx="51.405" cy="3.525" r="2.72" />
                    <circle cx="63.441" cy="3.525" r="2.72" />
                    <circle cx="75.479" cy="3.525" r="2.72" />
                    <circle cx="87.514" cy="3.525" r="2.719" />
                  </g>
                  <g transform="translate(0 24)">
                    <circle cx="3.261" cy="3.605" r="2.72" />
                    <circle cx="15.296" cy="3.605" r="2.719" />
                    <circle cx="27.333" cy="3.605" r="2.72" />
                    <circle cx="39.369" cy="3.605" r="2.72" />
                    <circle cx="51.405" cy="3.605" r="2.72" />
                    <circle cx="63.441" cy="3.605" r="2.72" />
                    <circle cx="75.479" cy="3.605" r="2.72" />
                    <circle cx="87.514" cy="3.605" r="2.719" />
                  </g>
                  <g transform="translate(0 36)">
                    <circle cx="3.261" cy="3.686" r="2.72" />
                    <circle cx="15.296" cy="3.686" r="2.719" />
                    <circle cx="27.333" cy="3.686" r="2.72" />
                    <circle cx="39.369" cy="3.686" r="2.72" />
                    <circle cx="51.405" cy="3.686" r="2.72" />
                    <circle cx="63.441" cy="3.686" r="2.72" />
                    <circle cx="75.479" cy="3.686" r="2.72" />
                    <circle cx="87.514" cy="3.686" r="2.719" />
                  </g>
                  <g transform="translate(0 49)">
                    <circle cx="3.261" cy="2.767" r="2.72" />
                    <circle cx="15.296" cy="2.767" r="2.719" />
                    <circle cx="27.333" cy="2.767" r="2.72" />
                    <circle cx="39.369" cy="2.767" r="2.72" />
                    <circle cx="51.405" cy="2.767" r="2.72" />
                    <circle cx="63.441" cy="2.767" r="2.72" />
                    <circle cx="75.479" cy="2.767" r="2.72" />
                    <circle cx="87.514" cy="2.767" r="2.719" />
                  </g>
                  <g transform="translate(0 61)">
                    <circle cx="3.261" cy="2.846" r="2.72" />
                    <circle cx="15.296" cy="2.846" r="2.719" />
                    <circle cx="27.333" cy="2.846" r="2.72" />
                    <circle cx="39.369" cy="2.846" r="2.72" />
                    <circle cx="51.405" cy="2.846" r="2.72" />
                    <circle cx="63.441" cy="2.846" r="2.72" />
                    <circle cx="75.479" cy="2.846" r="2.72" />
                    <circle cx="87.514" cy="2.846" r="2.719" />
                  </g>
                  <g transform="translate(0 73)">
                    <circle cx="3.261" cy="2.926" r="2.72" />
                    <circle cx="15.296" cy="2.926" r="2.719" />
                    <circle cx="27.333" cy="2.926" r="2.72" />
                    <circle cx="39.369" cy="2.926" r="2.72" />
                    <circle cx="51.405" cy="2.926" r="2.72" />
                    <circle cx="63.441" cy="2.926" r="2.72" />
                    <circle cx="75.479" cy="2.926" r="2.72" />
                    <circle cx="87.514" cy="2.926" r="2.719" />
                  </g>
                  <g transform="translate(0 85)">
                    <circle cx="3.261" cy="3.006" r="2.72" />
                    <circle cx="15.296" cy="3.006" r="2.719" />
                    <circle cx="27.333" cy="3.006" r="2.72" />
                    <circle cx="39.369" cy="3.006" r="2.72" />
                    <circle cx="51.405" cy="3.006" r="2.72" />
                    <circle cx="63.441" cy="3.006" r="2.72" />
                    <circle cx="75.479" cy="3.006" r="2.72" />
                    <circle cx="87.514" cy="3.006" r="2.719" />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</>

    </Base>
  )
}

export default Signup



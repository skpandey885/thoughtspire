import React, { useState } from 'react'
import Base from "../components/Base";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Signup = () => {
 const [firstPassword, setfirstPassword] = useState("")
 const [secondPassword, setsecondPassword] = useState("")
 const [toURL, settoURL] = useState("")
 const navigate = useNavigate();

 const handleChange1 = (event) => {
  setfirstPassword(event.target.value);
};

const handleChange2 = (event) => {
  setsecondPassword(event.target.value);
};
 
const toRedirect = () => {

  if(firstPassword===secondPassword){
    settoURL("/");
  }else{
    settoURL("/auth/login");
  }

}

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
          <div className="relative flex flex-col items-center justify-center w-[95%] h-[95%] lg:pr-10 -ml-[100px]">
            <img
              src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png"
              className="hidden lg:block"
            />
          </div>
        </div>
        <div className="relative z-10 mt-20 mb-0 ml-0 mr-0 w-fullmax-w-2xl lg:mt-0 lg:w-5/12">
          <div
            className="relative z-10 flex flex-col items-start justify-start p-10 -mt-[30px] bg-white shadow-2xl rounded-xl"
          >
            <p className="w-full text-4xl leading-snug text-center font-small font-Sora ">
              Sign up for an account
            </p>
            <div className="relative w-full mt-6 mb-0 ml-0 mr-0 space-y-8">
              <div className="relative">
                <p
                  className="absolute pt-0 pb-0 pl-1 pr-1 mb-0 ml-2 mr-0 -mt-3 font-medium text-gray-600 bg-white"
                >
                 Full Name
                </p>
                <input
                  placeholder="John Melvin"
                  type="text"
                  className="block w-full p-3 mb-0 ml-0 mr-0 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md pb- focus:outline-none focus:border-black"
                />
              </div>
              <div className="relative">
                <p className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 font-medium text-gray-600 bg-white">
                  Email
                </p>
                <input
                  placeholder="123@ex.com"
                  type="email"
                  className="block w-full p-3 mt-2 mb-0 ml-0 mr-0 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                />
              </div>
              <div className="relative">
                <p
                  className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 font-medium text-gray-600 bg-white"
                >
                  Password
                </p>
                <input
                  placeholder="Password"
                  type="password"
                  onChange={handleChange1}
                  className="block w-full p-3 mt-2 mb-0 ml-0 mr-0 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                />
              </div>

              <div className="relative">
                <p
                  className="absolute pt-0 pb-0 pl-2 pr-2 mb-0 ml-2 mr-0 -mt-3 font-medium text-gray-600 bg-white"
                >
                  Confirm Password
                </p>
                <input
                  placeholder="Password"
                  type="password"
                  onChange={handleChange2}
                  className="block w-full p-3 mt-2 mb-0 ml-0 mr-0 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                />
              </div>
              <div className="relative">
                
                <Link
                type='submit'
                to={toURL}
                onClick={toRedirect}
                  className="inline-block w-full pt-4 pb-4 pl-5 pr-5 text-xl font-medium text-center text-white no-underline transition duration-200 bg-indigo-500 rounded-lg hover:bg-indigo-600 ease"
                >
                  Submit
                </Link>
              </div>
            </div>
          </div>
          <svg
            viewBox="0 0 91 91"
            className="absolute top-0 left-0 z-0 w-32 h-32 -mt-20 -ml-12 text-yellow-300 fill-current"
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
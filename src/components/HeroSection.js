import React from 'react'
import "../index.css"
import { Link } from 'react-router-dom'
import TestSVG from "../assets/diary-animate.svg"

const HeroSection = () => {
  return (

    <div>
    <>
        <section className="px-2 mt-[-50px] bg-white dark:bg-main-dark-bg md:px-0 h-fit">
            <div className="container items-center max-w-screen-xl px-8 mx-auto xl:px-5">
                <div className="flex flex-wrap items-center sm:-mx-3">
                    <div className="w-full md:w-1/2 md:px-3">
                        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                            <h1 className="text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                {/* <span className="block font-Sora xl:inline">thoughtspire</span> */}
                                <span className="block mt-4 text-5xl font-thin text-blue-500 lg:mt-8 sm:text-5xl xl:text-8xl">
                                
                                   a great way to share your thoughts
                                </span>
                            </h1>
                            <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                           thoughtspire, is a platform where individuals can share their thoughts, ideas, experiences, and opinions with others in a meaningful and engaging way.
                            </p>
                            <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                                {/* <a
                                    href="/register/student"
                                    className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-500 rounded-md sm:mb-0 hover:bg-blue-700 sm:w-auto"
                                >
                                    Get Started
                                </a> */}

                                <Link to={"/posts/create"}>
                                <button id='thghtspire-button' className='text-lg'>
                                    Get Started
                                </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full md:w-1/2">  
                   <img className='border-none mt-[-30px]' src={TestSVG} alt="" />         
                    </div>
                </div>
            </div>
        </section>
    </>

</div>


  )
}

export default HeroSection
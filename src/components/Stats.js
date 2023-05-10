import React from 'react'
import CountUp from 'react-countup'

const Stats = () => {
  const converted = {
    width: "95px",
    border: "2px solid rgb(59 130 246)",
  }
  
  return (
    <section className="py-10 sm:py-16 lg:py-24">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-3xl font-bold leading-tight text-black sm:text-4xl ">
          Numbers tell our  &nbsp;
          <span className="mt-2 text-3xl tracking-tight text-blue-500 font-Sora sm:text-4xl">
          story
      <div style={converted} className='ml-[27rem]'></div>
          </span>
        </p>
        <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
          We are a team of multi-talented people who are dedicated to their work and are always ready to help you.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
        <div>
          <h3 className="font-bold text-7xl">
        
         <CountUp duration={60} end={150} className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600'/>
         <span className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600'>+</span>
          </h3>
          <p className="mt-4 text-xl font-medium text-gray-900">
           profile updates
          </p>
          <p className="text-base mt-0.5 text-gray-500">
            handled
          </p>
        </div>
        <div>
          <h3 className="font-bold text-7xl">
           
           <CountUp duration={60} end={1000} className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600'/>
           <span className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600'>+</span>
          </h3>
          <p className="mt-4 text-xl font-medium text-gray-900">
            Blogs Published
          </p>
          <p className="text-base mt-0.5 text-gray-500">till now</p>
        </div>
        <div>
          <h3 className="font-bold text-7xl">
          <CountUp duration={120} end={250} className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600'/>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600'>+</span>
          </h3>
          <p className="mt-4 text-xl font-medium text-gray-900">Users</p>
          <p className="text-base mt-0.5 text-gray-500">
           expressed there thoughts
          </p>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Stats
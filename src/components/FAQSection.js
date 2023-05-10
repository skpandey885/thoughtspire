import React from 'react'

const FAQSection = () => {
  const converted = {
    width: "180px",
    border: "2px solid rgb(59 130 246)",
  }
  
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
      <p className="mt-2 text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
      Frequently Asked &nbsp;
      <span className="mt-2 text-3xl tracking-tight text-blue-500 font-Sora sm:text-4xl">
      Questions
      <div style={converted} className='ml-[38rem]'></div>
          </span>
          </p>
     

      <div className="flow-root mt-12 sm:mt-16">
        <div className="divide-y divide-gray--200 -my-9">
          <div className="py-9">
            <p className="text-xl font-semibold text-black">
            How do I create an account on Thoughtspire?
            </p>
            <p className="mt-3 text-base text-gray-600">
             In order to create an account, you need to register with us. You need to fill in some basic details <br/>like name, email, about etc and you are good to go.
             Team Thoughtspire will redirect you to your dashboard where <br/> you can start writing your blogs.
             
            </p>
            
          </div>
          <div className="py-9">
            <p className="text-xl font-semibold text-black">
            Is my personal information secure on Thoughtspire?
            </p>
            <p className="mt-3 text-base text-gray-600">
            Yes, we take the security and privacy of our users very seriously. Thoughtspire implements robust <br/> security measures to protect your personal information. We use encryption and follow industry-standard security <br/> practices to ensure that your data is kept safe.
            </p>
          </div>
          <div className="py-9">
            <p className="text-xl font-semibold text-black">
            How can I publish a blog post on Thoughtspire?
            </p>
            <p className="mt-3 text-base text-gray-600">
            After signing in to your Thoughtspire account, 
            click on the "Create Post" button.  <br />
            You can then enter your blog content, add images, 
            format the text, and preview your post before 
            publishing. <br /> Once you are satisfied with your post, 
            click on the "Post" button to make it live on the platform.
            </p>
          </div>
          <div className="py-9">
            <p className="text-xl font-semibold text-black">
              How do you provide support?
            </p>
            <p className="mt-3 text-base text-gray-600">
              We are here to assist you with any questions or issues you may have. To reach us, please send an email to 
              &nbsp;
              
              <a
                href="mailto:thoughtspire@mailinator.com"
                title=""
                className="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
              >
             thoughtspire@mailinator.com
              </a>.
              
            We will respond to your inquiry as soon as possible, typically within 24-48 hours during weekdays. Please make sure to provide a detailed description of the problem or question you have so that we can assist you more effectively. 
            
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>  
  
  )
}

export default FAQSection
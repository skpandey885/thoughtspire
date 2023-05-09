import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { getCurrentUserDetail, getCurrentUserPassword } from '../auth'
import { sendOTPService, updateUserByID } from '../services/user-services'
import { toast } from 'react-toastify'

const ProfileComponent = ({user}) => {

  const[loggedInUser, setloggedInUser] = useState(null)
  const[updateButtonText, setupdateButtonText] = useState("Update Info")
  const [profile, setprofile] = useState(user)
  const [password1, setpassword1] = useState("")
  const [password2, setpassword2] = useState("")
  const [changePassword, setchangePassword] = useState(false)
  const [otpButton, setotpButton] = useState({clicked: false, buttonText: "Send OTP"})
  const [OTP, setOTP] = useState("")
  const [OTPfromBackend, setOTPfromBackend] = useState("")
  const updateButtonClick= useRef(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

 /* This `useEffect` hook is used to set the `loggedInUser` state variable to the current user details
 when the component mounts. The empty dependency array `[]` ensures that this effect only runs once,
 when the component mounts. The `getCurrentUserDetail()` function is likely a utility function that
 retrieves the current user details from local storage or from the server. */
  useEffect(() => {
    setloggedInUser(getCurrentUserDetail());
  }, [])


/* The code is using the `useEffect` hook in React to perform an action when the `profile` state
changes. It checks if the `updateButtonClick` ref is set to `true`, and if so, it calls the
`performUpdate` function and sets `updateButtonClick` to `false`. This suggests that there is a
button or some other user interaction that triggers an update to the `profile` state, and this code
ensures that the update is performed only when the button is clicked. */

useEffect(() => {
 if(updateButtonClick.current){
  performUpdate();
  updateButtonClick.current = false;
 }
  }, [profile])
  
  // function to handle the change in the input fields
const handleChange=(event, fieldName)=>{
  if(fieldName==="OTP"){
    setOTP(event.target.value)
  }else{
    setprofile({...profile,[fieldName]: event.target.value})
  }  
}

// function to handle the change in the password fields
const handlePasswordChange =(e, fieldName)=>{
   if(fieldName==="password1"){
    setpassword1(e.target.value)
   }else{
    setpassword2(e.target.value)
   }
}

/**
 * The function sends an OTP to a user's email and updates the button text accordingly.
 * parameter e - The event object, which is passed as an argument to the function when it is triggered by
 * an event (such as a button click).
 */
const OTPSend =(e)=>{
  e.preventDefault();
  setotpButton({clicked: true, buttonText: "Sending OTP..."})
  
  sendOTPService(profile.email).then((data)=>{
    setotpButton({clicked: true, buttonText: "OTP Sent"})
    setOTPfromBackend(data.message);
    console.log(data.message);
  }).catch((err)=>{ 
    toast.error("Could not send OTP.")
    setotpButton({clicked: false, buttonText: "Resend OTP"})
  })
}

// function to perform the update
const performUpdate = ()=>{
  updateUserByID(profile.id, profile)
  .then((data) => {
    setprofile({...profile, data});
    toast.success("Profile Info Updated.")
  })
  .catch((err)=>{
    toast.error("Could not update profile.")
    console.log(profile);
    console.log(err);
  })
  setupdateButtonText("Update Info")
}
  
// function to update the user data
  const handleUpdateDetails = (e) => {

    console.log("clicked");
    
    if(updateButtonText==="Update Info"){
         setupdateButtonText("Update")
    }else{
  
      updateButtonClick.current = true;
  if(changePassword) {
    if(password1!==password2){
      toast.warn("Passwords did not match.")
      return;
    }

    if(OTPfromBackend!==OTP){
      toast.warn("OTP did not match.")
      return;
    }
    
    setprofile({...profile, password: password1})
    
  }else{
    let passwordSavedInStorage =  getCurrentUserPassword()
    setprofile({...profile, password: passwordSavedInStorage})
  }}}
  
    return (
  
        <div className='container p-5 m-5 border-2 rounded-md'>
          <div className="px-4 sm:px-0">
            <h1 className="leading-7 text-gray-900 font-Sora ">User Info</h1>
            <p className="max-w-2xl mt-1 text-sm leading-6 text-gray-500">Personal details and application.</p>
          </div>
          
          <div className="mt-6">

            <div className="flex items-end justify-between part1">
              
           
          <div className="">
        <img
      src="https://image.freepik.com/free-vector/cute-astronaut-holding-star-cartoon-illustration-space-icon-concept_138676-1915.jpg"
      className="border-none rounded-full shadow-xl max-w-[150px] m-2 inline"/>
</div>
<div className='mt-[40px] flex flex-col '>
{
            loggedInUser ?
             (loggedInUser.id === profile.id) ? (
      
      <Link to="/user/dashboard">
      <button type="button" className="float-right text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">See Posts</button>
      </Link>
              
           ) : '' : ''
          }
          
{
            loggedInUser ?
             (loggedInUser.id === profile.id) ? (
              
              <button onClick={(e)=> handleUpdateDetails(e)}  type="button" className="float-right text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm py-2.5 text-center mr-2 mb-2">{updateButtonText}</button>
              
           ) : '' : ''
          }
</div>
</div>
            <dl className="divide-y divide-gray-100">
          
              <div className="px-4 py-3 mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="font-medium leading-6 text-gray-900">Full name</dt>

                {
                     updateButtonText === "Update" ? (
                      <input className="p-2 bg-gray-100 border-blue-700 rounded-md" value={profile.name} onChange={(e)=> handleChange(e, 'name')}>
                      </input>
                    ) : (
                      <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{profile.name}</dd>
                    )
                }
               
              </div>
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="font-medium leading-6 text-gray-900 ">Email address</dt>
                <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{profile.email}</dd>
              </div>
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="font-medium leading-6 text-gray-900 ">Role</dt>
                <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
  
                  {profile.roles.length === 1 ? 'Normal' : 'Normal, Admin'}
                  </dd>
              </div>
   
              <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="font-medium leading-6 text-gray-900">About</dt>
               
               {
                updateButtonText === "Update" ? (
                  <textarea className="p-2 bg-gray-100 border-blue-700 rounded-md" value={profile.about} onChange={(e)=> handleChange(e, 'about')}>
                  </textarea>
                ) : (
                  <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {profile.about}
                  </dd>
                  )
               }
              </div>
              
{
    updateButtonText==="Update"  &&
(
              <div className={classNames(changePassword ? "hidden" : "px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0" )}
              >
              <span className={classNames(changePassword ? "hidden" :  'text-blue-500 underline cursor-pointer' )}
                onClick={()=> setchangePassword(!changePassword)}
              >Click here to update the password too.</span>
              </div>
)         
}
    
              {
                updateButtonText==="Update" ? (

                  changePassword && (
                  
                  <>
                  <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="font-medium leading-6 text-gray-900">Password</dt>
                  <input type='password' className="p-2 bg-gray-100 border-blue-700 rounded-md" value={password1} onChange={(e)=> handlePasswordChange(e, 'password1')}>
                  </input>
                </div>
              
                  <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="font-medium leading-6 text-gray-900">Confirm Password</dt>
              
                    <input type='password' className="p-2 bg-gray-100 border-blue-700 rounded-md" value={password2} onChange={(e)=> handlePasswordChange(e, 'password2')}>
                    </input>
                  
                </div>
                
                <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="font-medium leading-6 text-gray-900">Enter the OTP</dt>
              
                    <input type='text' className="p-2 bg-gray-100 border-blue-700 rounded-md" value={OTP} onChange={(e)=> handleChange(e, 'OTP')}>
                    </input>
                  
      <button
        type="button"
        onClick={(e)=> OTPSend(e)}
        className={classNames(!otpButton.clicked ? " font-medium text-center text-blue-700 border border-blue-700 rounded-lg hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" : 'focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm dark:focus:ring-green-900', '')}

      >
        {otpButton.buttonText}
      </button>
                </div>
                </>
                  )
                ) : ""
              }

              {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul role="list" className="border border-gray-200 divide-y divide-gray-100 rounded-md">
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex items-center flex-1 w-0">
                        <PaperClipIcon className="flex-shrink-0 w-5 h-5 text-gray-400" aria-hidden="true" />
                        <div className="flex flex-1 min-w-0 gap-2 ml-4">
                          <span className="font-medium truncate">resume_back_end_developer.pdf</span>
                          <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                          Download
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex items-center flex-1 w-0">
                        <PaperClipIcon className="flex-shrink-0 w-5 h-5 text-gray-400" aria-hidden="true" />
                        <div className="flex flex-1 min-w-0 gap-2 ml-4">
                          <span className="font-medium truncate">coverletter_back_end_developer.pdf</span>
                          <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                          Download
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div> */}
              
  
            
            </dl>
          </div>
        </div>
      )
}

export default ProfileComponent
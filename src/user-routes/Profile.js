import React, { useEffect, useState } from 'react'
import Base from '../components/Base'
import {  useParams } from 'react-router-dom'
import { getUserByID } from '../services/user-services';
import ProfileComponent from '../components/ProfileComponent';

const Profile = () => {

  const[user, setUser] = useState(null);
  const {userID} = useParams()

  const getUser = () => {
    getUserByID(userID).
    then((data) => {
      setUser(data)
    })
    .catch((err) => {
      console.log(err)
    })

  }

  useEffect(() => {
    getUser() 
  }, [])

  return (
    <Base>
    {user && <ProfileComponent user = {user}/>}
    {!user && <h3 className='m-5 text-center font-Sora'>Could not load profile.</h3>}
    </Base>
  )
}

export default Profile
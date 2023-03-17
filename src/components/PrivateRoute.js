import React from 'react'
import { isLoggedIn } from '../auth'
import { Outlet, Navigate } from 'react-router-dom'

/*
This is a component which dispalys only when user is logged in
*/

const PrivateRoute = () => {
 
   /*When we hit the url `/user` and `isLoggedIn` is true, then also it will not display the <Outlet/> component beacuse 
       It will be only displayd when we hit the url `/user/dashboard`. 
       
       Still facing confusion? See this entire video: https://www.youtube.com/watch?v=umiwRGIYAV4&list=PL0zysOflRCekAvE0nXWobPCgW0ets6s5o&index=13
   */

 if(isLoggedIn()){
    return <Outlet/>

 }else{
    return <Navigate to={"/auth/login"}/>
 }
}

export default PrivateRoute
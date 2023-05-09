import { myAxios, privateAxios } from "./helper";


export const signUp = (user)=>{
    return myAxios
    .post("/api/v1/auth/register", user)
    .then((response) => response.data);
} 

export const loginUser = (loginDetail) =>{
  return myAxios
  .post("/api/v1/auth/login", loginDetail)
  .then((response) => response.data);
}

export const getUserByID = (userID) =>{
  return myAxios
  .get(`/api/users/${userID}`)
  .then((response) => response.data);
}

export const updateUserByID=(userID, userData) =>{
  return privateAxios
  .put(`/api/users/${userID}`, userData)
  .then((response) => response.data);
} 

export const sendOTPService = (email) =>{
  return myAxios
  .get(`/api/users/${email}/email-send`)
  .then((response) => response.data);
}
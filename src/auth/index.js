
// is Logged In
 export const isLoggedIn = ()=>{
   let dataInLocalStorage = localStorage.getItem("data");

   if(dataInLocalStorage === null){
        return false;
   }else{
        return true;
   }

 }



/* do login ->  Set data or Token to local storage of browser
 next() is the callback function passed to doLogin
*/
export const doLogin = (data, next) => {
    localStorage.setItem("data", JSON.stringify(data));
    next();
}


/* do logout -> Remove data or Token from local storage of browser
next() is the callback function passed to doLogout
*/
export const doLogout = (next)=>{
    localStorage.removeItem("data");
    next();
}


// get current User
export const getCurrentUserDetail = () => {
    if(isLoggedIn){
       return JSON.parse(localStorage.getItem("data")).user;
    }else{
        return false;
    }
}

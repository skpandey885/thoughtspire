
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
    removePassword()
    next();
}


// get current User
export const getCurrentUserDetail = () => {
    if(isLoggedIn()){
       return JSON.parse(localStorage.getItem("data")).user;
    }else{
        console.log("User is not logged in.");
        return undefined;
    }
}


// get current user password
export const savePasswordService = (password) => {
    localStorage.setItem("password", JSON.stringify(password));
}


// get current user password
export const getCurrentUserPassword = () => {
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("password"));
    }else{
        console.log("User is not logged in.");
        return undefined;
    }
}

// remove password, next is a call back function
export const removePassword = ()=>{
    localStorage.removeItem("password");
}

// get current user token
export const getToken = () => {
    if(isLoggedIn()){
       return JSON.parse(localStorage.getItem("data")).token;
    }else{
        console.log("User is not logged in.");
        return undefined;
    }
}


import { privateAxios } from "./helper";
import { myAxios } from "./helper";


export const createPostService=(postData) => {
    return privateAxios.post(`/api/users/${postData.userId}/category/${postData.categoryId}/posts`, postData)
    .then(response => response.data);
}

export const loadAllPosts= (pageNumber, pageSize) =>{
    return myAxios.get(`/api/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=DESC`).then(response => response.data);
}


//load single post of given ID
export const loadPostByID= (postID) =>{
    return myAxios.get(`/api/posts/${postID}`).then(response => response.data);
}


//create comment
export const createComment= (comment, userID, postID) =>{
    return privateAxios.post(`/api/user/${userID}/post/${postID}/comments`, comment)
    .then(response => response.data);
}
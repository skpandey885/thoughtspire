import { privateAxios } from "./helper";
import { myAxios } from "./helper";


export const createPostService=(postData) =>{
    return privateAxios.post(`/api/users/${postData.userId}/category/${postData.categoryId}/posts`, postData)
    .then(response => response.data);

}

export const loadAllPosts= (pageNumber, pageSize) =>{
    return myAxios.get(`/api/posts?pageNumber=${pageNumber}&pageSize=${pageSize}`).then(response => response.data);
}
import { privateAxios } from "./helper";

export const createPostService=(postData) =>{
    return privateAxios.post(`/api/users/${postData.userId}/category/${postData.categoryId}/posts`, postData)
    .then(response => response.data);

}
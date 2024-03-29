import axios from "axios";

export const getPostsByPage = async (pageNumber) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/post/page/${pageNumber}`
    );
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
export const searchPosts = async (text) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/post/search/${text}`
    );
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
export const addPosts = async (post) => {
  try {
    const response = await axios.post(`http://localhost:8080/post`, post);
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
export const editPosts = async (id, post) => {
  try {
    const response = await axios.put(`http://localhost:8080/post/${id}`, post);
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
export const deletePost = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8080/post/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
export const createComment = async (comment) => {
  try {
    const response = await axios.post(`http://localhost:8080/comment`, comment);
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
export const editComment = async (id, comment) => {
  try {
    const response = await axios.put(
      `http://localhost:8080/comment/${id}`,
      comment
    );
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
export const uploadPostPicture = async (id, formData) => {
  try {
    const response = await axios.post(
      `http://localhost:8080/post/${id}/picture`,
      formData
    );
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
export const deleteComment = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8080/comment/${id}`);
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

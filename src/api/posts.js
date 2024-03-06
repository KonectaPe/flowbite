import axios from "./axios";

export const getPostsRequest = async (token) =>
  axios.get("/posts", { headers: { token: token } });

export const createPostRequest = async (token, post) =>
  axios.post("/posts", post, { headers: { token: token } });

export const updatePostRequest = async (post) =>
  axios.put(`/tasks/${post._id}`, post);

export const deletePostRequest = async (id) => axios.delete(`/posts/${id}`);

export const getPostRequest = async (id) => axios.get(`/posts/${id}`);

export const getAllPostsRequest = async () => axios.get("/allposts");

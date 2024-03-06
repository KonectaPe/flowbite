import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import {
  getPostsRequest,
  createPostRequest,
  getAllPostsRequest,
} from "../api/posts";

const PostContext = createContext();

export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) throw new Error("usePosts must be used within a PostProvider");
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [errors, setErrors] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const getPosts = async () => {
    const token = localStorage.getItem("token");
    const res = await getPostsRequest(token);
    setPosts(res.data);
  };

  const createPost = async (post) => {
    const token = localStorage.getItem("token");
    try {
      const res = await createPostRequest(token, post);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      setErrors([error.response?.data?.error]);
    }
  };

  const getAllPosts = async () => {
    try {
      const res = await getAllPostsRequest();
      setAllPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostContext.Provider
      value={{ posts, allPosts, getAllPosts, getPosts, createPost, errors }}
    >
      {children}
    </PostContext.Provider>
  );
};

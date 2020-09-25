import { Post } from "./post";
import { GET_POSTS, ADD_POST, PostActions } from "./types";

export const getPosts = (posts: Post[]): PostActions => {
  return {
    type: GET_POSTS,
    payload: posts
  };
};

export const addPost = (post: Post): PostActions => {
  return {
    type: ADD_POST,
    payload: post
  };
};

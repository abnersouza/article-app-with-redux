import { Post } from "./post";

export const GET_POSTS = 'posts/getPosts';
export const ADD_POST = 'posts/addPosts';

export type PostState = {
  posts: Post[];
}

export type GetPosts = {
  type: typeof GET_POSTS;
  payload: Post[];
}

export type AddPost = {
  type: typeof ADD_POST;
  payload: Post
}

export type PostActions = GetPosts | AddPost;


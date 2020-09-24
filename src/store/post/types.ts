import { Post } from "./post";

export const GET_POSTS = 'GET_POSTS';

export type PostState = {
  posts: Post[];
}

type GetPostsAction = {
  type: typeof GET_POSTS;
  payload: Post[];
}

export type PostActions = GetPostsAction;

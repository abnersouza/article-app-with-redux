import { Post } from "./post";
import { GET_POSTS, PostActions } from "./types";

export const getPostsAction = (posts: Post[]): PostActions => {
  return {
    type: GET_POSTS,
    payload: posts
  };
};

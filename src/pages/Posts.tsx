import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "../components/PostItem";
import { AppState } from "../store";
import { Post } from "../store/post/post";
import { getPosts } from "../store/post/posts.fake";

const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const { posts } = useSelector((state: AppState) => state.posts);
  const postItems = posts.map((post: Post) => <PostItem post={post} />);

  return <div>{postItems}</div>;
};

export default Posts;

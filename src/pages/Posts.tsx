import React, { useEffect, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import PostItem from "../components/PostItem";

import { AppState } from "../store";

import { addPost, getPosts } from "../store/post/actions";
import { Post } from "../store/post/post";

import "./Posts.css";

const Posts = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { posts } = useSelector((state: AppState) => state.posts);

  const quotes = [
    "The best thing about a boolean is even if you are wrong, you are only off by a bit. (Anonymous)",
    "Without requirements or design, programming is the art of adding bugs to an empty text file. (Louis Srygley)",
    "Before software can be reusable it first has to be usable. (Ralph Johnson)",
    "The best method for accelerating a computer is the one that boosts it by 9.8 m/s2. (Anonymous)",
    "I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing. (Oktal)",
  ];

  const postItems = posts.map((post: Post) => (
    <PostItem post={post} key={post.id} />
  ));

  const addNewPost = (e: MouseEvent) => {
    e.preventDefault();

    const newPost = {
      id: posts.length + 1,
      title: `Programming Quotes`,
      body: quotes[Math.floor(Math.random() * 5)],
      userId: Math.random(),
    };

    dispatch(addPost(newPost));
  };

  const handleNavigationToArticle = (e: MouseEvent) => {
    e.preventDefault();

    if (history.length) {
      history.goBack();
    }

    history.push("/");
  };

  useEffect(() => {
    const POST_URL = "https://jsonplaceholder.typicode.com/posts";
    fetch(POST_URL, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data: Post[]) => {
        dispatch(getPosts(data.reverse()));
        // return data;
      });
  }, [dispatch]);

  return (
    <main className="Posts">
      <h1>My Posts</h1>
      <div className="Posts__buttonsContainer">
        <button
          className="Posts__backButton"
          onClick={(e) => handleNavigationToArticle(e)}
        >
          Go Back
        </button>
        <button className="Posts__addPostButton" onClick={(e) => addNewPost(e)}>
          Add Post
        </button>
      </div>
      <br />
      {postItems}
    </main>
  );
};

export default Posts;

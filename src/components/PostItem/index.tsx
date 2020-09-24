import React from "react";
import { Post } from "../../store/post/post";

import "./styles.css";

type Props = {
  post: Post;
};

const PostItem = ({ post }: Props) => {
  return (
    <div className="postItem" key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostItem;

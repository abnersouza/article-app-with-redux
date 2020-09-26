import React from "react";
import { Post } from "../store/post/post";

import "./PostItem.css";

type Props = {
  post: Post;
};

const PostItem = ({ post }: Props) => {
  return (
    <div className="PostItem">
      <h1>
        #{post.id} {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostItem;

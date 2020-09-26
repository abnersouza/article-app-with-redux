import React, { FC, useCallback } from "react";

import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

import "./ArticleItem.css";

type Props = {
  article: Article;
  removeArticle: (article: Article) => void;
};

export const ArticleItem: FC<Props> = ({ article, removeArticle }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteArticle = useCallback(
    (article: Article) => dispatch(removeArticle(article)),
    [dispatch, removeArticle]
  );

  return (
    <div className="ArticleItem">
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
      <button onClick={() => deleteArticle(article)}>Delete</button>
    </div>
  );
};

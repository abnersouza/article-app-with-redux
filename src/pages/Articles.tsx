import React, { MouseEvent, useCallback } from "react";

import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { ArticleItem } from "../components/ArticleItem";
import { AddArticle } from "../components/AddArticle";
import { addArticle, removeArticle } from "../store/article/actions";
import { AppState } from "../store";
import { useHistory } from "react-router-dom";

import "./Articles.css";

const Articles = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { articles } = useSelector(
    (state: AppState) => state.articles,
    shallowEqual
  );

  const saveArticle = useCallback(
    (article: Article) => dispatch(addArticle(article)),
    [dispatch]
  );

  const handleNavigationToPost = (e: MouseEvent) => {
    e.preventDefault();
    history.push("/posts");
  };

  return (
    <main className="Articles">
      <h1>My Articles</h1>
      <button
        className="Articles__button"
        onClick={(e) => handleNavigationToPost(e)}
      >
        Go to Posts
      </button>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: Article) => (
        <ArticleItem
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </main>
  );
};

export default Articles;

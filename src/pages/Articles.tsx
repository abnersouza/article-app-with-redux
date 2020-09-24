import React, { useCallback } from "react";

import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { ArticleItem } from "../components/ArticleItem";
import { AddArticle } from "../components/AddArticle";
import { addArticle, removeArticle } from "../store/article/actions";
import { AppState } from "../store";

const Articles = () => {
  const dispatch = useDispatch();

  const { articles } = useSelector(
    (state: AppState) => state.articles,
    shallowEqual
  );

  const saveArticle = useCallback(
    (article: Article) => dispatch(addArticle(article)),
    [dispatch]
  );

  return (
    <main>
      <h1>My Articles</h1>
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

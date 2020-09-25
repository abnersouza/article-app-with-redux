import React, { FC, FormEvent, useState } from "react";

import "./AddArticle.css";

type Props = {
  saveArticle: (article: Article | any) => void;
};

export const AddArticle: FC<Props> = ({ saveArticle }) => {
  const [article, setArticle] = useState<Article | {}>();

  const handleArticleData = (e: FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewArticle = (e: FormEvent) => {
    e.preventDefault();
    saveArticle(article);
  };

  return (
    <form onSubmit={addNewArticle} className="AddArticle">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
        required
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleArticleData}
        required
      />

      <button type="submit">Add Article</button>
    </form>
  );
};

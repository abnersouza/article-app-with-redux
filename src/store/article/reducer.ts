import * as articleTypes from "./types";

const initialState: ArticleState = {
  articles: [
    {
      id: 1,
      title: "Clean Code",
      body: "We all MUST write clean code."
    },
    {
      id: 2,
      title: "SOLID - Principles",
      body: "After clean code, solid should be a must for every application."
    }
  ]
}

const articleReducer = (
  state: ArticleState = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case articleTypes.ADD_ARTICLE:
      const newArticle: Article = {
        id: Math.random(),
        title: action.article.title,
        body: action.article.body
      }

      return {
        ...state,
        articles: [newArticle].concat(state.articles)
      }

    case articleTypes.REMOVE_ARTICLE:
      const updatedArticles: Article[] = state.articles.filter(
        article => article.id !== action.article.id
      )

      return {
        ...state,
        articles: updatedArticles
      }
    default:
      return state
  }
}

export default articleReducer;
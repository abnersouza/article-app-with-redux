import * as actionTypes from "./actionTypes";

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

const reducer = (
  state: ArticleState = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle: IArticle = {
        id: Math.random(),
        title: action.article.title,
        body: action.article.body
      }

      return {
        ...state,
        articles: state.articles.concat(newArticle)
      }

    case actionTypes.REMOVE_ARTICLE:
      const updatedArticles: IArticle[] = state.articles.filter(
        article => article.id !== action.article.id
      )

      return {
        ...state,
        articles: updatedArticles
      }
  }
  return state
}

export default reducer
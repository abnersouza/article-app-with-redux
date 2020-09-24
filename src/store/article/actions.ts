import * as articleTypes from "./types";

export function addArticle(article: Article) {
  const action: ArticleAction = {
    type: articleTypes.ADD_ARTICLE,
    article
  }

  return simulateHttpRequest(action)
}

export function removeArticle(article: Article) {
  const action: ArticleAction = {
    type: articleTypes.REMOVE_ARTICLE,
    article
  }

  return simulateHttpRequest(action)
}

// This can be changed to use a real api call
export function simulateHttpRequest(action: ArticleAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500)
  }
}


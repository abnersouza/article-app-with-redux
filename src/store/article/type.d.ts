interface Article {
  id: number
  title: string
  body: string
}

type ArticleState = {
  articles: Article[]
}

type ArticleAction = {
  type: string
  article: Article
}

type DispatchType = (args: ArticleAction) => ArticleAction

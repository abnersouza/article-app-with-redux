import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import thunkMiddleware from "redux-thunk";

import articleReducer from "./article/reducer";
import postReducer from "./post/reducer";

const rootReducer = combineReducers({
  articles: articleReducer,
  posts: postReducer
});

const store = createStore(
  rootReducer,
  // Easy to check state in the browser with composeWithDevTools https://github.com/reduxjs/redux-devtools
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export type AppState = ReturnType<typeof rootReducer>;

export default store;

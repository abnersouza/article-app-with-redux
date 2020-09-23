import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import reducer from "./store/reducer";

import App from "./App";

const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));

test("renders my articles", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const headerElement = getByText(/My Articles/i);
  expect(headerElement).toBeInTheDocument();
});

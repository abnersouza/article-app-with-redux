import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

test("renders my articles", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const headerElement = getByText(/My Articles/i);
  expect(headerElement).toBeInTheDocument();
});

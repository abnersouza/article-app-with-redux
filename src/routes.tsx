import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Articles from "./pages/Articles";
import Posts from "./pages/Posts";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Add other routes above */}
        <Route path="/posts" component={Posts} />
        <Route path="/" component={Articles} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, Router, Switch } from "react-router-dom";
import App from "./components/App.jsx";
import SearchResults from "./components/SearchResults.jsx";
import history from "./history.js";

const routing = (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/pages/searchResults" component={SearchResults} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("app"));

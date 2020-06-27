import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Login, Chat } from "./screens";
import history from "./utils/history";
import "./App.css";

const App = () => {
  return (
    <Router history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/chat" exact component={Chat} />
        </Switch>
    </Router>
  );
};

export default App;

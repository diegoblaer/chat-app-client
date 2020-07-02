import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, Chat } from "./screens";
import "./App.css";

const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/chat" exact component={Chat} />
        </Switch>
    </Router>
  );
};

export default App;

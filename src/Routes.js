import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Complete from "./Pages/SignUp/Complete";
import React, { Component } from "react";
import SignUp from "./Pages/SignUp/SignUp";
import Main from "./Pages/Main/Main";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Complete} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/main" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

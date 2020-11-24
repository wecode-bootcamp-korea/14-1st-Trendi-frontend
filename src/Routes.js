import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import SignUp from "./Pages/SignUp/SignUp";
import SignUpInfo from "./Pages/SignUp/SignUpInfo";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={SignUpInfo} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/SignUpInfo" component={SignUpInfo} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

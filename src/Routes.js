import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpInfo from "./Pages/SignUp/SignUpInfo";
import SignUp from "./Pages/SignUp/Agreement";
import Complete from "./Pages/SignUp/Complete";
import Main from "./Pages/Main/Main";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={SignUpInfo} />
          <Route exact path="/Complete" component={Complete} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/SignUpInfo" component={SignUpInfo} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

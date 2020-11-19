import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Complete from "./Pages/SignUp/Complete";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Complete} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Review from "./Components/DetailItem/Review";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Review} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

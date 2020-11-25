import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Review from "./Components/DetailItem/Review";
import SignUp from "./Pages/SignUp/SignUp";
import Main from "./Pages/Main/Main";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Complete" component={Complete} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/main" component={Review} />
          <Route exact path="/Review" component={Review} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

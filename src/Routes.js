import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Review from "./Components/DetailItem/Review";
import SignUp from "./Pages/SignUp/SignUp";
import Main from "./Pages/Main/Main";

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

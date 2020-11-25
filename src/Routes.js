import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import Complete from "./Pages/SignUp/Complete";
import SignUp from "./Pages/SignUp/SignUp";
import Main from "./Pages/Main/Main";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import SignUpInfo from "./Pages/SignUp/SignUpInfo";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={SignUpInfo} />
          <Route exact path="/Complete" component={Complete} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/SignUpInfo" component={SignUpInfo} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;

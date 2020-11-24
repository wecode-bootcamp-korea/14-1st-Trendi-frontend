import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import SignUp from "./Pages/SignUp/SignUp";
import MyCart from "./Pages/MyCart/MyCart";
import Main from "./Pages/Main/Main";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/" component={SignUp} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/MyCart" component={MyCart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

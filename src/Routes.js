import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import MyCart from "./Pages/MyCart/MyCart";
import Complete from "./Pages/SignUp/Complete";
import Main from "./Pages/Main/Main";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MyCart} />
          <Route exact path="/Complete" component={Complete} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/footer" component={Footer} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

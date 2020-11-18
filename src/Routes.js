import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import MyPage from "./Pages/MyPage/MyPage";
import SignUpInfo from "./Pages/SignUp/SignUpInfo";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/MyPage" component={MyPage} />
          <Route exact path="/SignUpInfo" component={SignUpInfo} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

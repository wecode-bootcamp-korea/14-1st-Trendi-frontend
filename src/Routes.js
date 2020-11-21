<<<<<<< HEAD
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Review from "./Components/DetailItem/Review";
=======
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import Footer from './Components/Footer/Footer';
=======
import SignUp from './Pages/SignUp/SignUp';
>>>>>>> main
import Main from './Pages/Main/Main';
>>>>>>> main

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
<<<<<<< HEAD
          <Route exact path="/" component={Review} />
=======
          <Route exact path="/" component={Main} />
          <Route exact path="/" component={SignUp} />
>>>>>>> main
        </Switch>
      </Router>
    );
  }
}

export default Routes;

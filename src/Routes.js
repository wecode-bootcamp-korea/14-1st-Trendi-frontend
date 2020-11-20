import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import Footer from './Components/Footer/Footer';
=======
import SignUp from './Pages/SignUp/SignUp';
>>>>>>> main
import Main from './Pages/Main/Main';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import Footer from './Components/Footer/Footer';
=======
import SignUp from './Pages/SignUp/SignUp';
>>>>>>> main
import Main from './Pages/Main/Main';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;

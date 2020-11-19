import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Footer from './Components/Footer/Footer';
import Test from './Components/Nav/Test';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/test" component={Test} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;

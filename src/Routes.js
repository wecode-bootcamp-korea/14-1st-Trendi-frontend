import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import SimpleSlider from './Pages/Main/SimpleSlider';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <SimpleSlider />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;

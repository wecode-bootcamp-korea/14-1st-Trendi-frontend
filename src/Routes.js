import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import Main from './Pages/Main/Main';
import DetailItem from '../src/Components/DetailItem/DetailItem';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/detailItem" component={DetailItem} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

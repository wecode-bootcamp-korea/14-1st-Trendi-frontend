import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import Main from './Pages/Main/Main';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
<<<<<<< HEAD
          <Route exact path="/main" component={Main} />
=======
          <Route exact path="/" component={Main} />
>>>>>>> main
          <Route exact path="/" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
=======
import Footer from './Components/Footer/Footer';
>>>>>>> db231ef7a085ba6e93854c87998163b938750ecd
import SignUp from './Pages/SignUp/SignUp';
import Main from './Pages/Main/Main';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/" component={SignUp} />
          <Route exact path="/footer" component={Footer} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

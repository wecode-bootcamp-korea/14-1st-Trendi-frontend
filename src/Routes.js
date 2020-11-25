import React, { Component } from 'react';
import DetailItem from './Components/DetailItem/DetailItem';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Complete from './Pages/SignUp/Complete';
import Main from './Pages/Main/Main';
// import SignUp from './Pages/SignUp/SignUp';
import SignUpInfo from './Pages/SignUp/SignUpInfo';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/DetailItem" component={DetailItem} />
          <Route exact path="/" component={SignUpInfo} />
          <Route exact path="/Complete" component={Complete} />
          {/* <Route exact path="/signup" component={SignUp} /> */}
          <Route exact path="/main" component={Main} />
          <Route exact path="/SignUpInfo" component={SignUpInfo} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;

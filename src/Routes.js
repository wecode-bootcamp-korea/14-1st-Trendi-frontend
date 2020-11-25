import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import SignUp from './Pages/SignUp/SignUp';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Main from './Pages/Main/Main';
import DetailItem from './Components/DetailItem/DetailItem';
import Complete from './Pages/SignUp/Complete';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Complete} />
          {/* <Route exact path="/signup" component={SignUp} /> */}
          <Route exact path="/main" component={Main} />
          <Route exact path="/detailItem/:id" component={DetailItem} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;

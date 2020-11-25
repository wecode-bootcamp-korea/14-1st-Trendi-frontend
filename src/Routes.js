import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Complete from './Pages/SignUp/Complete';
import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
// import SignUp from './Pages/SignUp/SignUp';
import Main from './Pages/Main/Main';
import CategoryPage from './Pages/CategoryPage/CategoryPage';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Complete} />
          {/* <Route exact path="/signup" component={SignUp} /> */}
          <Route exact path="/main" component={Main} />
          <Route exact path="/CategoryPage" component={CategoryPage} />
          <Route exact path="/detailItem/:id" component={Main} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;

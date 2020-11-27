import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Main from './Pages/Main/Main';
import SignUp from './Pages/SignUp/SignUp';
import SignUpInfo from './Pages/SignUp/SignUpInfo';
import MyPage from './Pages/MyPage/MyPage';
import DetailItem from './Components/DetailItem/DetailItem';
import Complete from './Pages/SignUp/Complete';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import Login from './Pages/Login/Login';
import MyCart from './Pages/MyCart/MyCart';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signupinfo" component={SignUpInfo} />
          <Route exact path="/detailItem" component={DetailItem} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/Complete" component={Complete} />
          <Route exact path="/categoryPage" component={CategoryPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/mycart" component={MyCart} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;

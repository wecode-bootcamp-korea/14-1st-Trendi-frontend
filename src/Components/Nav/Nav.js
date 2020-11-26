import React, { Component } from "react";
import ShoppingNav from "./ShoppingNav";
import "./Nav.scss";
import { withRouter } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navLists: false,
    };
  }

  componentDidMount() {
    const user_name = localStorage.getItem("user_name");
    console.log("////////////", user_name);
    user_name && this.setState({ user_name });
  }

  handleLeave = () => {
    this.setState({ navLists: false });
  };

  handleEnter = () => {
    this.setState({ navLists: true });
  };

  pageChage = (e) => {
    const { user_name } = this.state;
    user_name && localStorage.removeItem("user_name");
    user_name && localStorage.removeItem("token");

    this.props.history.push(e.target.dataset.page);
  };

  render() {
    const { navLists, user_name } = this.state;
    return (
      <nav className="Nav">
        <div>
          <img className="benerImg" src="/images/banner.png" alt="배너 이미지" />
        </div>
        <div className="none">
          <div className="NavBottom">
            <div className="logoBox">
              <img className="logoImg" src="./images/trandi.jpg" alt="로고 이미지" onClick={() => this.props.history.push("/")} />
            </div>
            <div className="form">
              <div className="searchContainer">
                <input className="searchInput"></input>
                <div className="magnifierBox">
                  <img
                    className="magnifier"
                    src="https://www.brandi.co.kr/static/20.08.01/images/a-action-bar-icon-search-nor.png"
                    alt="돋보기"
                  />
                </div>
              </div>
            </div>
            <div className="navList">
              <ul className="ul">
                {NAV_LIST.map((el, index) => {
                  return el.title === "로그인" && user_name ? (
                    <li className="liElement" data-page={el.id} onClick={this.pageChage}>
                      로그아웃
                    </li>
                  ) : (
                    <li className="liElement" data-page={el.id} onClick={this.pageChage}>
                      {el.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="navBottomList" onMouseLeave={this.handleLeave} onMouseEnter={this.handleEnter}>
          <div className="none1">
            {NAV_BOTTOM.map((el) => {
              return (
                <span className="navListLi" onMouseLeave={this.handleLeave} onMouseEnter={this.handleEnter}>
                  {el.title}
                </span>
              );
            })}
          </div>
        </div>
        {navLists && <ShoppingNav handleEnter={this.handleEnter} handleLeave={this.handleLeave} />}
      </nav>
    );
  }
}

export default withRouter(Nav);

const NAV_LIST = [
  { id: "/dibs", title: "찜" },
  { id: "mycart", title: "장바구니" },
  { id: "mypage", title: "마이페이지" },
  { id: "login", title: "로그인" },
];

const NAV_BOTTOM = [
  { id: 1, title: "홈" },
  { id: 2, title: "랭킹" },
  { id: 3, title: "하루배송" },
  { id: 4, title: "쇼핑몰·마켓" },
  { id: 5, title: "특가" },
  { id: 6, title: "스토어" },
];

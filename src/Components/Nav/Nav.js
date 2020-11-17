import React, { Component } from 'react';
import ShoppingNav from './ShoppingNav';
import './Nav.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navLists: false,
      navListTest: true,
    };
  }

  handleLeave = (e) => {
    this.setState({ navLists: false });
    console.log('leave');
  };
  handleHover = (e) => {
    const { navLists } = this.state;
    this.setState({ navLists: !navLists });
  };

  handleEnter = (e) => {
    const { navListTest } = this.state;
    this.setState({ navLists: true });
    console.log('enter');
  };

  render() {
    const { navLists } = this.state;
    return (
      <div className="Nav">
        <div>
          <img
            className="benerImg"
            src="https://image.brandi.me/home/banner/bannerImage_230087_1605493950.jpg"
            alt="배너 이미지"
          />
        </div>
        <div className="none">
          <div className="NavBottom">
            <div className="logoBox">
              <img
                className="logoImg"
                src="https://www.brandi.co.kr/static/20.08.01/images/logo@3x.png"
                alt="로고 이미지"
              />
            </div>
            <form>
              <input className="searchInput"></input>
              <div className="magnifierBox">
                <img
                  className="magnifier"
                  src="https://www.brandi.co.kr/static/20.08.01/images/a-action-bar-icon-search-nor.png"
                  alt="돋보기"
                />
              </div>
            </form>
            <div className="navList">
              <ul>
                {NAV_LIST.map((el) => {
                  return <li className="liElement">{el.title}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="navBottomList">
          <div className="none1">
            {NAV_BOTTOM.map((el) => {
              return (
                <span
                  className="navListLi"
                  onMouseLeave={this.handleLeave}
                  onMouseEnter={this.handleEnter}
                >
                  {el.title}
                </span>
              );
            })}
          </div>
        </div>
        {navLists && (
          <ShoppingNav
            handleEnter={this.handleEnter}
            handleLeave={this.handleLeave}
          />
        )}
      </div>
    );
  }
}

export default Nav;

const NAV_LIST = [
  { id: 1, title: '찜' },
  { id: 2, title: '다이렉트' },
  { id: 3, title: '마이페이지' },
  { id: 4, title: '로그인' },
];

const NAV_BOTTOM = [
  { id: 1, title: '홈' },
  { id: 2, title: '랭킹' },
  { id: 3, title: '하루배송' },
  { id: 4, title: '쇼핑몰·마켓' },
  { id: 5, title: '특가' },
  { id: 6, title: '스토어' },
];

import React, { Component } from 'react';
import ShoppingNav from './ShoppingNav';
import './Nav.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      navLists: false,
      navListTest: true,
    };
  }

  componentDidMount() {
    fetch('http://10.58.3.61:8000/products/categories/2')
      .then((res) => res.json())
      .then((res) => res.data);
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleLeave = () => {
    this.setState({ navLists: false });
  };

  handleEnter = () => {
    this.setState({ navLists: true });
  };

  render() {
    const { navLists, value } = this.state;
    return (
      <nav className="Nav">
        <div>
          <img className="benerImg" src="./images/banner.png" alt="배너 이미지" />
        </div>
        <div className="none">
          <div className="NavBottom">
            <div className="logoBox">
              <img className="logoImg" src="./images/trandi.jpg" alt="로고 이미지" />
            </div>
            <form className="form">
              <div className="searchContainer">
                <input className="searchInput" value={value} onChange={this.handleChange}></input>
                <div className="magnifierBox">
                  <img
                    className="magnifier"
                    src="https://www.brandi.co.kr/static/20.08.01/images/a-action-bar-icon-search-nor.png"
                    alt="돋보기"
                  />
                </div>
              </div>
            </form>
            <div className="navList">
              <ul className="ul">
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
        {navLists && <ShoppingNav handleEnter={this.handleEnter} handleLeave={this.handleLeave} />}
      </nav>
    );
  }
}

export default Nav;

const NAV_LIST = [
  { id: 1, title: '찜' },
  { id: 2, title: '장바구니' },
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

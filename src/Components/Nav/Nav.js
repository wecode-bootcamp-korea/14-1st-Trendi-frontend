import React, { Component } from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './Nav.scss';

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

class Nav extends Component {
  render() {
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
              return <span className="navListLi">{el.title}</span>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;

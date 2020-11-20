import React, { Component } from 'react';
import './ItemCategory.scss';

class ItemCategory extends Component {
  render() {
    return (
      <div className="ItemCategory">
        <nav className="nav">
          <div className="navBox">
            <div className="mainCategory">
              <div className="categoryTitle">상품옵션</div>
              <div className="categoryList">하루 사진</div>
              <div className="categoryList">세일</div>
            </div>
          </div>
          <div className="categoryBox">
            <div className="categoryTitle">CATEGORY</div>
            <div className="categoryList">전체</div>
            <div className="categoryList">아우터</div>
            <div className="categoryList">상의</div>
            <div className="categoryList">
              <div className="list">전체</div>
              <div className="list">티셔츠</div>
            </div>
            <div className="categoryList">바지</div>
            <div className="categoryList">원피스</div>
            <div className="categoryList">스커트</div>
            <div className="categoryList">신발</div>
            <div className="categoryList">가방</div>
            <div className="categoryList">주얼리</div>
            <div className="categoryList">잡화</div>
            <div className="categoryList">라이프웨어</div>
            <div className="categoryList">빅사이즈</div>
          </div>
        </nav>
      </div>
    );
  }
}

export default ItemCategory;

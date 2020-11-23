import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import ItemCategory from './ItemCategory';
import ShirtList from './ShirtList';
import './CategoriePage.scss';

const API2 = 'http://10.58.2.123:8000/products?category=2&sub-category=2';

class CategoriePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      filterItem: [],
    };
  }

  //원두님꺼 데이터
  componentDidMount() {
    fetch(API2)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.get }));
  }

  render() {
    const { data } = this.state;
    console.log('data는? ');
    return (
      <div className="SideItemList">
        <Nav />
        <nav className="nav">
          <div className="blankSpaceBox">
            <div className="navComment">
              <div className="commentBox">
                <div className="comment">쇼핑몰 ∙ 마켓</div>
                <div className="comment">></div>
                <div className="comment">카테고리</div>
                <div className="comment">></div>
                <div className="comment">상의</div>
                <div className="comment">></div>
                <div className="comment">전체</div>
              </div>
            </div>
          </div>
        </nav>
        <div className="ItemList">
          <div className="ItemCategory">
            <ItemCategory />
          </div>
          <div className="ShirtList">
            <ShirtList data={data} />
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriePage;

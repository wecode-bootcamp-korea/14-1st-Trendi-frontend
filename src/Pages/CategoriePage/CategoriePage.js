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
      haruFilter: false,
    };
  }

  //원두님꺼 데이터
  componentDidMount() {
    fetch(API2)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.product_list }));
  }

  handleItemFilter = (e) => {
    console.log(e.target.value);
    const { data, haruFilter } = this.state;
    let itemFilter;
    if (haruFilter) {
      itemFilter = [];
    } else {
      itemFilter = data.filter((item) => {
        return item.delivery;
      });
    }
    this.setState({ filterItem: itemFilter, haruFilter: !haruFilter });
  };

  render() {
    const { data, haruFilter, filterItem } = this.state;

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
          <div>
            <input className={haruFilter} type="checkbox" onChange={this.handleItemFilter} />
          </div>
          <div className="ShirtList">
            {filterItem.length && data ? (
              <ShirtList data={filterItem} />
            ) : (
              <ShirtList data={data} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriePage;

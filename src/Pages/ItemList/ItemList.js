import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import ItemCategory from './ItemCategory';
import './ItemList.scss';

class ItemList extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div>
          <div>
            <div>
              <div>쇼핑몰 마켓</div>
              <div>카테고리</div>
              <div>상의</div>
              <div>전체</div>
            </div>
          </div>
        </div>
        <div className="none">
          <ItemCategory />
        </div>
      </div>
    );
  }
}

export default ItemList;

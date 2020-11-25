import React, { Component } from 'react';
import ItemSection from './ItemSection';
import PictureBox from './PictureBox';
import Nav from '../Nav/Nav';
import ItemInfomationBar from '../ItemInfomationBar/ItemInfomationBar';
import ItemInfo from '../ItemInfomationBar/ItemInfo';
import './DetailItem.scss';

class DetailItem extends Component {
  render() {
    return (
      <div className="DetailItem">
        <Nav />
        <div className="noneDetailItem">
          <div className="itemBox">
            <div className="componentWrap">
              <PictureBox />
              <ItemSection />
            </div>
            <ItemInfomationBar />
            <ItemInfo />
            <div className="nio">상품정보</div>
            <div className="nio">테스트</div>
            <div className="nio">테스트</div>
            <div className="nio">리뷰</div>
            <div className="nio">테스트</div>
            <div className="nio">테스트</div>
            <div className="nio">테스트</div>
            <div className="nio">테스트</div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailItem;

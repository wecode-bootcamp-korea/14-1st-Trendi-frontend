import React, { Component } from 'react';
import ItemSection from './ItemSection';
import PictureBox from './PictureBox';
import Nav from '../Nav/Nav';
import ItemInfomationBar from '../ItemInfomationBar/ItemInfomationBar';
import ItemInfo from '../ItemInfomationBar/ItemInfo';
import './DetailItem.scss';

class DetailItem extends Component {
  goToItemInfo = (e) => {
    let location = document.querySelector('.nio1').offsetTop;
    window.scrollTo({ top: location, behavior: 'smooth' });
  };
  goToReview = (e) => {
    let location = document.querySelector('.nio2').offsetTop;
    window.scrollTo({ top: location, behavior: 'smooth' });
  };
  render() {
    return (
      <div className="DetailItem">
        <div className="noneDetailItem">
          <div className="itemBox">
            <div className="componentWrap">
              <PictureBox />
              <ItemSection />
            </div>
            <ItemInfomationBar goToItemInfo={this.goToItemInfo} goToReview={this.goToReview} />
            <ItemInfo />
            <div className="nio">테스트</div>
            <div className="nio">테스트</div>
            <div className="nio">테스트</div>
            <div className="nio1">상품정보</div>
            <div className="nio">상품정보</div>
            <div className="nio">테스트</div>
            <div className="nio2">리뷰</div>
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

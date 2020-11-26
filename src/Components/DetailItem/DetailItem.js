import React, { Component } from 'react';
import ItemSection from './ItemSection';
import PictureBox from './PictureBox';

import ItemInfomationBar from './ItemInfomationBar';
// import ItemInfo from './ItemInfo';
import './DetailItem.scss';
class DetailItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  goToItemInfo = (e) => {
    let location = document.querySelector('.nio1').offsetTop;
    window.scrollTo({ top: location, behavior: 'smooth' });
  };
  goToReview = (e) => {
    let location = document.querySelector('.nio2').offsetTop;
    window.scrollTo({ top: location, behavior: 'smooth' });
  };

  componentDidMount() {
    fetch('http://10.58.5.224:8000/products/3')
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.product_detail }));
  }

  render() {
    const { data } = this.state;
    return (
      <div className="DetailItem">
        <div className="noneDetailItem">
          <div className="itemBox">
            <div className="componentWrap">
              <PictureBox />
              <ItemSection />
            </div>
            <div className="infoBox">
              <ItemInfomationBar goToItemInfo={this.goToItemInfo} goToReview={this.goToReview} />
              {/* <ItemInfo /> */}
            </div>
          </div>
          <div className="nioBox">
            <div className="nio">테스트sdsdsd</div>
            <div className="nio1">테스트</div>
            <div className="nio2">테스트</div>
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

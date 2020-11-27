import React, { Component } from 'react';
import ItemSection from './ItemSection';
import PictureBox from './PictureBox';
import ItemInfomationBar from '../ItemInfomationBar/ItemInfomationBar';
import ItemInfo from '../ItemInfomationBar/ItemInfo';
import configData from '../../config.json';
import Review from './Review';
import { withRouter } from 'react-router-dom';
import './DetailItem.scss';

class DetailItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(`${configData.DETAILITEM_URL}/1`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.product_detail }));
  }

  goToItemInfo = (e) => {
    let location = document.querySelector('.commentBox').offsetTop;
    window.scrollTo({ top: location, behavior: 'smooth' });
  };
  goToReview = (e) => {
    let location = document.querySelector('.reviewBox2').offsetTop;
    window.scrollTo({ top: location, behavior: 'smooth' });
  };

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
            <div className="test2">
              <ItemInfomationBar goToItemInfo={this.goToItemInfo} goToReview={this.goToReview} />
              {data.review_info && <ItemInfo data={data} />}
              {data.review_info && <Review reviewProps={data.review_info} />}
              <div className="reviewBox2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DetailItem);

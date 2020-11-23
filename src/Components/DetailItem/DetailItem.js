import React, { Component } from 'react';
import ItemSection from './ItemSection';
import PictureBox from './PictureBox';
import ReviewBar from '../ReviewBar/ReviewBar';
import './DetailItem.scss';

class DetailItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="DetailItem">
        <div className="noneDetailItem">
          <div className="itemBox">
            <PictureBox />
            <ItemSection />
            <ReviewBar />
          </div>
        </div>
      </div>
    );
  }
}

export default DetailItem;

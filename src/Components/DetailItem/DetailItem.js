import React, { Component } from 'react';
import ItemSection from './ItemSection';
import PictureBox from './PictureBox';
import './DetailItem.scss';

class DetailItem extends Component {
  render() {
    return (
      <div className="DetailItem">
        <div className="noneDetailItem">
          <div className="itemBox">
            <PictureBox />
            <ItemSection />
          </div>
        </div>
      </div>
    );
  }
}

export default DetailItem;

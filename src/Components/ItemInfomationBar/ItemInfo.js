import React, { Component } from 'react';
import './ItemInfo.scss';

class ItemInfo extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="ItemInfo">
        <div>
          <img src={data.image_url} alt="사진" />
        </div>
      </div>
    );
  }
}

export default ItemInfo;

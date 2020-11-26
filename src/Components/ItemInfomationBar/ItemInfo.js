import React, { Component } from 'react';
import './ItemInfo.scss';

class ItemInfo extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div className="ItemInfo">
        <div className="container">
          <div className="imgContainer">
            <img src={data.image_url} alt="사진" />
          </div>
          <div className="color">{data.color_list}</div>
          <div className="price">가격 : {data.price}</div>
          <div className="size">사이즈 : {data.size_list}</div>
          <div>{data.description}</div>
        </div>
      </div>
    );
  }
}

export default ItemInfo;

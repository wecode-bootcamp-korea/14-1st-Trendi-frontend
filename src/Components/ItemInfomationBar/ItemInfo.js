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
          <div className="commentBox">
            <div className="comment">사이즈 : {data.color_list}</div>
            <br />
            <div className="comment">가격 : {data.price}</div>
            <br />
            <div className="comment">사이즈 : {data.size_list}</div>
            <br />
            <div>{data.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemInfo;

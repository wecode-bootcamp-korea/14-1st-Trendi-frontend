import React, { Component } from 'react';
import './ShirtList.scss';

class ShirtList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 30,
      toggle: false,
      haru: true,
      data: [],
    };
  }

  handleKeyUp = () => {
    this.setState({ toggle: false });
    window.scrollBy(0, -500);
  };

  handlePlus = () => {
    const { count } = this.state;
    this.setState({ toggle: true, count: count + 20 });
  };

  render() {
    const { count, toggle } = this.state;
    let dataCut = this.props.data ? this.props.data.slice(0, count) : '';
    let clickBox = toggle ? 'blackBtn' : 'whiteBtn';

    return (
      <div className="ShirtList">
        <div className="bodyContainer">
          <div className="comment"></div>
          <div className="Box">
            {dataCut.map((api) => {
              const haruImg = api.delivery ? '../../../images/haru2.png' : '../../../images/white.png';

              const splitStr = api.title.length >= 5 ? api.title.substr(0, 17) + '・・・' : '';
              return (
                <article className="itemContainer" key={api.item_seller}>
                  <div className="itemBox">
                    <div className="itemImgBox">
                      <img className="itemImg" src={api.image_url} alt="대표사진" />
                    </div>
                    <div className="sellerBox">
                      <div className="seller">{api.seller_name}</div>
                      <div className="haru">
                        <img className="haruPicture" src={haruImg} alt="하루사진" />
                      </div>
                    </div>
                    <div className="itemName">{splitStr}</div>
                    <div className="priceBox">
                      <div className="discount">{api.sale}%</div>
                      <div className="price">{api.price.toLocaleString(2)}</div>
                    </div>
                  </div>
                </article>
              );
            })}
            <div className="buttonBox">
              <button className={clickBox} onMouseDown={this.handlePlus} onMouseUp={this.handleKeyUp}>
                더 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShirtList;

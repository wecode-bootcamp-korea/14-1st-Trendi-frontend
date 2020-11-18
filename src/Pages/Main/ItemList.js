import React, { Component } from 'react';
import './ItemList.scss';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 15,
      toggle: false,
    };
  }

  handleKeyUp = () => {
    this.setState({ toggle: false });
    window.scrollBy(0, -500);
  };

  handlePlus = () => {
    const { count } = this.state;
    this.setState({ toggle: true, count: count + 15 });
  };

  render() {
    const { count, toggle } = this.state;
    const { MainAPI } = this.props;

    let MainApiCut = MainAPI.slice(0, count);
    let clickBox = toggle ? 'blackBtn' : 'whiteBtn';

    return (
      <div className="ItemList">
        <div className="noneBody">
          <div className="bodyContainer">
            <div className="comment"></div>
            <div className="comment">당신을 위한 추천</div>
            <div className="comment"></div>
            <div className="Box">
              {MainApiCut.map((api) => {
                return (
                  <article className="itemContainer" key={api.item_id}>
                    <div className="itemBox">
                      <div className="itemImgBox">
                        <img className="itemImg" src="./images/test1.jpg" alt="사진" />
                      </div>
                      <div className="sellerBox">
                        <div className="seller">{api.item_seller}</div>
                        <div className="haru">
                          <img className="haruPicture" src="./images/likeheart.png" alt="하루" />
                        </div>
                      </div>
                      <div className="itemName">[반값특가]{api.item_name}</div>
                      <div className="priceBox">
                        <div className="discount">{api.item_discount}</div>
                        <div className="price">{api.item_price}</div>
                      </div>
                    </div>
                  </article>
                );
              })}
              <div className="buttonBox">
                <button
                  className={clickBox}
                  onMouseDown={this.handlePlus}
                  onMouseUp={this.handleKeyUp}
                >
                  더 보기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemList;

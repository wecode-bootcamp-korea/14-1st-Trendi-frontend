import React, { Component } from 'react';
import './ItemList.scss';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 15,
      toggle: false,
      haru: true,
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
    console.log('MainAPI ', this.props.MainAPI);
    const { count, toggle, haru } = this.state;
    const { MainAPI } = this.props;
    let MainApiCut = MainAPI ? MainAPI.slice(0, count) : '';
    console.log('MainApiCut', MainApiCut);
    let clickBox = toggle ? 'blackBtn' : 'whiteBtn';
    const haruImg = haru ? './image/haru.png' : '';

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
                  <article className="itemContainer" key={api.image_url}>
                    <div className="itemBox">
                      <div className="itemImgBox">
                        <img className="itemImg" src={api.image_url} alt="사진" />
                      </div>
                      <div className="sellerBox">
                        <div className="seller">{api.seller_name}</div>
                        <div className="haru">
                          <img className="haruPicture" src={haru} alt="하루" /> {/*api.delivery*/}
                        </div>
                      </div>
                      <div className="itemName">{api.title}</div>
                      <div className="priceBox">
                        <div className="discount">{api.sale}%</div>
                        <div className="price">{api.price}</div>
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

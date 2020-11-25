import { TransferWithinAStationSharp } from '@material-ui/icons';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './ShirtList.scss';

class ShirtList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'select',
      count: 20,
      toggle: false,
      haru: true,
      data: [],
    };
  }

  handleKeyUp = () => {
    window.scrollBy(0, -500);
  };

  handlePlus = () => {
    const { count } = this.state;
    this.setState({ count: count + 20 });
  };

  change = (e) => {
    console.log('얘는 클릭되나?');
    this.setState({ value: e.target.value });
  };

  render() {
    const { count, toggle, value } = this.state;
    const {
      saleValue,
      newestValue,
      reviewValue,
      underPriceValue,
      onChangeSaleValue,
      onChangeNewestValue,
      onChangeReviewValue,
      onChangeUnderPriceValue,
    } = this.props;
    let dataCut = this.props.data ? this.props.data.slice(0, count) : '';
    let clickBox = toggle ? 'blackBtn' : 'whiteBtn';

    return (
      <div className="ShirtList">
        <div className="bodyContainer">
          <div className="dropDownContainer">
            <div className="dropDownBox">
              <div className="dropDown">
                <div className="downBox">
                  <div className="dropDownElement" onClick={onChangeSaleValue}>
                    판매량순
                  </div>
                  <div className="dropImgBox">
                    <img className="dropImg" src="/images/down.png" alt="다운" />
                  </div>
                </div>
              </div>
              <div className="ortherBox">
                <div className="dropDownElement2" onClick={onChangeNewestValue}>
                  최신순
                </div>
                <div className="dropDownElement2" onClick={onChangeReviewValue}>
                  리뷰많은순
                </div>
                <div className="dropDownElement2" onClick={onChangeUnderPriceValue}>
                  낮은가격순
                </div>
              </div>
            </div>
          </div>
          <div className="Box">
            {dataCut.map((api) => {
              const haruImg = api.delivery ? '../../../images/haru2.png' : '../../../images/white.png';
              const splitStr = api.title.length >= 5 ? api.title.substr(0, 17) + '・・・' : '';
              return (
                <article className="itemContainer" key={api.item_seller} id={api.product_pk}>
                  <div className="itemBox">
                    <div className="itemImgBox">
                      <img className="itemImg" src={api.image_url} alt="대표사진" />
                    </div>
                    <div className="sellerBox">
                      <div className="seller">{api.seller_name} </div>
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

export default withRouter(ShirtList);

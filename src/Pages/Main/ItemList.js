import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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

  goToDetail = () => {
    this.props.history.push('/detailitem/');
  };

  render() {
    const { count } = this.state;
    const { mainItem } = this.props;
    let mainItemCut = mainItem ? mainItem.slice(0, count) : '';
    return (
      <div className="ItemList">
        <div className="noneBody">
          <section className="bodyContainer">
            <div className="comment"></div>
            <div className="comment">당신을 위한 추천</div>
            <div className="comment"></div>
            <div className="Box">
              {mainItemCut.map((api, i) => {
                const haruImg = api.delivery ? '../../../images/haru.png' : '../../../images/white.png';
                const splitStr = api.title.length >= 5 ? api.title.substr(0, 17) + '・・・' : '';
                return (
                  <article className="itemContainer" key={i} id={api.product_pk} onClick={this.goToDetail}>
                    <div className="itemBox">
                      <div className="itemImgBox">
                        <img className="itemImg" src={api.image_url} alt="사진" />
                      </div>
                      <div className="sellerBox">
                        <div className="seller">{api.seller_name}</div>
                        <div className="haru">
                          <img className="haruPicture" src={haruImg} alt="하루" />
                        </div>
                      </div>
                      <div className="itemName">{splitStr}</div>
                      <div className="priceBox">
                        {api.sale ? <div className="discount">{api.sale}%</div> : ''}
                        <div className="price">{api.price.toLocaleString(2)}</div>
                      </div>
                    </div>
                  </article>
                );
              })}
              <div className="buttonBox">
                <button className="whiteBtn" onMouseDown={this.handlePlus} onMouseUp={this.handleKeyUp}>
                  더 보기
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(ItemList);

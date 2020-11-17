import React, { Component } from 'react';
import './Body.scss';

let INDEX = 0;

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      MainApi: [],
      count: 15,
    };
  }

  componentDidMount() {
    this.setState({ MainApi: this.props.MainAPI });
  }

  handlePlus = (e) => {
    this.setState({ count: this.state.count + 15 });
  };

  render() {
    const { MainApi, count } = this.state;
    let MainApiCut = MainApi.slice(0, count);
    // console.log(MainApiCut);
    return (
      <div className="Body">
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
                        <img
                          className="itemImg"
                          src="./images/test1.jpg"
                          alt="사진"
                        />
                      </div>
                      <div className="sellerBox">
                        <div className="seller">{api.item_seller}</div>
                        <div className="haru">
                          <img
                            className="haruPicture"
                            src="./images/likeheart.png"
                            alt="하루"
                          />
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
                <button onClick={this.handlePlus}>더 보기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;

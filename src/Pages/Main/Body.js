import React, { Component } from 'react';
import './Body.scss';

class Body extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      MainApi: [],
      count: 15,
      toggle: false,
    };
  }

  componentDidMount() {
    this.setState({ MainApi: this.props.MainAPI });
  }

  handleKeyUp = () => {
    this.setState({ toggle: false });
    window.scrollTo(0, 3000);
    console.log('Keyup :' + this.state.toggle);
  };
  handlePlus = () => {
    const { count } = this.state;
    this.setState({ toggle: true, count: count + 15 });
  };

  render() {
    const { MainApi, count, toggle } = this.state;
    let MainApiCut = MainApi.slice(0, count);
    let clickBox = toggle ? 'blackBtn' : 'whiteBtn';
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
                <button
                  className={clickBox}
                  onMouseDown={this.handlePlus}
                  onMouseUp={this.handleKeyUp}
                  // onClick={this.handleOnClick}
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

export default Body;

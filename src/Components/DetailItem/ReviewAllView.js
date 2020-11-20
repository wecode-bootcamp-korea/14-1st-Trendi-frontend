import react, { Component } from "react";

class ReviewAllView extends Component {
  constructor() {
    super();
    this.state = { stateNum: 0, sliceList: [] };
  }
  componentDidMount() {
    let reviewList = this.props.reviewList;
    let sliceList = [];

    while (reviewList.length) {
      sliceList.push(reviewList.splice(0, 5));
    }
    this.setState({ sliceList });
  }
  render() {
    const { sliceList, stateNum } = this.state;
    return (
      <div className="ReviewAllView">
        {sliceList.length &&
          sliceList[stateNum].map((el, index) => {
            return (
              <div className="reviewForm">
                <div className="orderInfo">
                  <div>
                    <span>별5개</span>
                    <span>{el.nick_name}</span>
                  </div>
                  <div>2020.11.15</div>
                </div>
                <div className="ReviewDetailInfo">
                  <div>
                    <div className="orderBodyInfo">{el.item_discount}162cm 상의 55 하의 55 240mm 블랙/free 잘 맞아요</div>
                    <div>{el.content}</div>
                  </div>
                  <img
                    src="https://lh3.googleusercontent.com/ogw/ADGmqu8k2upUX7jY7GxdYcE1kL03iShgI83kJtt5-NKe=s128-b16-cc-rp-mo"
                    alt="구매 인증 이미지"
                  />
                </div>
              </div>
            );
          })}
        <div>
          <ul>
            {sliceList.length &&
              sliceList.map((el, index) => {
                return index < 5 ? (
                  <li>
                    <span>{index + 1}</span>
                  </li>
                ) : (
                  ""
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}
export default ReviewAllView;

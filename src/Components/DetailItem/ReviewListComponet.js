import react, { Component } from "react";
import Pagination from "react-js-pagination";
import "./ReviewListComponet.scss";

class ReviewAllView extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      perPage: 5,
      activePage: 15,
    };
  }
  setPage = (number) => {
    this.setState({ page: number });
  };

  render() {
    const { page, perPage } = this.state;
    let indexOflast = page * perPage;
    let indexOffirst = indexOflast - perPage;
    const currentPage = this.props.reviewList.slice(indexOffirst, indexOflast);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.reviewList.length / perPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <div className="ReviewAllView">
        {currentPage.map((el, index) => {
          return (
            <div className="reviewForm" key={index}>
              <div className="orderInfo">
                <div>
                  <span>{Array(el.item_discount + 1).join("✮")}</span>
                  <span>{el.item_name}</span>
                </div>
                <div className="writeDate">2020.11.15</div>
              </div>
              <div className="ReviewDetailInfo">
                <div>
                  <div className="orderBodyInfo">{el.item_discount}162cm 상의 55 하의 55 240mm 블랙/free 잘 맞아요</div>
                  <div>{el.content}이거 정말로 이상한 제품인거 같아요 다시는 사기 싫어요 ㅜㅜ</div>
                </div>
                <img
                  src="https://lh3.googleusercontent.com/ogw/ADGmqu8k2upUX7jY7GxdYcE1kL03iShgI83kJtt5-NKe=s128-b16-cc-rp-mo"
                  alt="구매 인증 이미지"
                />
              </div>
            </div>
          );
        })}
        <Pagination
          activePage={page}
          itemsCountPerPage={perPage}
          totalItemsCount={this.props.reviewList.length}
          pageRangeDisplayed={5}
          onChange={(number) => this.setPage(number)}
        />
      </div>
    );
  }
}
export default ReviewAllView;

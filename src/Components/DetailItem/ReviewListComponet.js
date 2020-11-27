import react, { Component } from 'react';
import Pagination from 'react-js-pagination';
import './ReviewListComponet.scss';

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

  updateView = (selectView) => {
    this.props.updateView(selectView);
  };

  deleteView = (selectView) => {
    this.props.deleteView(selectView);
  };

  render() {
    const { page, perPage } = this.state;
    const { reviewList } = this.props;
    let indexOflast = page * perPage;
    let indexOffirst = indexOflast - perPage;
    const currentPage = reviewList.slice(indexOffirst, indexOflast);
    return (
      <div className="ReviewAllView">
        {currentPage ? (
          currentPage.map((el, index) => {
            return (
              <div className="reviewForm" key={index}>
                <div className="orderInfo">
                  <div>
                    <span>{Array(el.star + 1).join('✮')}</span>
                    <span>{el.nick_name}</span>
                    <input type="button" value="수정" onClick={() => this.updateView(el)} />
                    <input type="button" value="삭제" onClick={() => this.deleteView(el)} />
                  </div>
                  <div className="writeDate">{el.updated_at.slice(0, 10)}</div>
                </div>
                <div className="ReviewDetailInfo">
                  <div>
                    <div className="orderBodyInfo">{el.content}162cm 상의 55 하의 55 240mm 블랙/free 잘 맞아요</div>
                    <div>{el.content}</div>
                  </div>
                  {el.photo_review && <img src={el.photo_review} alt="구매 인증 이미지" />}
                </div>
              </div>
            );
          })
        ) : (
          <div>데이터가 없습니다</div>
        )}
        <Pagination
          activePage={page}
          itemsCountPerPage={perPage}
          totalItemsCount={reviewList.length}
          pageRangeDisplayed={5}
          onChange={(number) => this.setPage(number)}
        />
      </div>
    );
  }
}
export default ReviewAllView;

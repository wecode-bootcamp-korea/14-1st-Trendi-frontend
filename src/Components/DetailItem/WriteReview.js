import react, { Component } from 'react';
import { FaStar } from 'react-icons/fa';
import './WriteReview.scss';

class WriteReview extends Component {
  constructor() {
    super();
    this.state = {
      review: {
        content: '',
        image_url: '',
        nick_name: '',
        product: 0,
        star: 0,
        updated_at: '',
        user_information: null,
      },
    };
  }

  componentDidMount = () => {};

  componentDidUpdate(preProps, preState) {
    const { updateData } = this.props;
    if (preProps.updateData !== updateData) {
      this.setState({ review: updateData });
    }
  }

  handleFileImge = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        img: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  insertOrUpdateDate = (e) => {
    const { review } = this.state;
    const { updateAPI, insertAPI } = this.props;
    if (review.review_id) {
      updateAPI(review);
    } else {
      insertAPI(review);
    }
  };

  setOnchage = (e) => {
    const { name, value } = e.target;
    let review = this.state.review;
    review[name] = value;
    this.setState({ review });
  };

  render() {
    const { view } = this.props;
    const { img, review } = this.state;
    return (
      <div className="WriteReview">
        <div className={`modal ${view && 'activeModal'}`}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <div className="modalView">
              <form className="setCenter">
                <table>
                  <colgroup>
                    <col width="100px" />
                    <col width="400px" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th height="80px">별점</th>
                      <td>
                        {[...Array(5)].map((star, index) => {
                          const ratingValue = index + 1;
                          return (
                            <label>
                              <input
                                type="radio"
                                name="star"
                                value={ratingValue}
                                onChange={(e) => this.setOnchage(e)}
                              />
                              <FaStar
                                size={50}
                                color={ratingValue <= review.star ? '#ffc107' : '#e4e4e9'}
                              />
                            </label>
                          );
                        })}
                      </td>
                    </tr>
                    <tr>
                      <th height="250px">구매후기</th>
                      <td>
                        <textarea
                          name="content"
                          value={review.content}
                          onChange={(e) => this.setOnchage(e)}
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <th height="80px">사진첨부</th>
                      <td className="imghandleForm">
                        <input
                          type="file"
                          accept="image/jpg,impge/png,image/jpeg,image/gif"
                          onChange={this.handleFileImge}
                        />
                        {img && <img src={img} alt="업로드 이미지" />}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="butonForm">
                  <input type="button" value="등록" onClick={() => this.insertOrUpdateDate()} />
                  <input
                    type="button"
                    value="취소"
                    onClick={() => this.props.closeModal('close')}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WriteReview;

import react, { Component } from "react";
import { FaStar } from "react-icons/fa";
import "./WriteReview.scss";

class WriteReview extends Component {
  constructor() {
    super();
    this.state = {
      rating: "",
      content: "",
      img: "",
    };
  }

  writeReview = (e) => {
    e.preventDefault();

    fetch("", {
      method: "post",
      header: {
        a: "",
      },
      body: {
        a: "",
      },
    }).then((res) => console.log(res));
  };

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

  render() {
    const { view } = this.props;
    const { rating, img } = this.state;
    return (
      <div className="WriteReview">
        <div className={`modal ${view && "activeModal"}`}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <div className="modalView">
              <div className="setCenter">
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
                                name="rating"
                                value={ratingValue}
                                onClick={(e) => this.setState({ rating: e.target.value })}
                              />
                              <FaStar size={50} color={ratingValue <= rating ? "#ffc107" : "#e4e4e9"} />
                            </label>
                          );
                        })}
                      </td>
                    </tr>
                    <tr>
                      <th height="250px">구매후기</th>
                      <td>
                        <textarea onChange={(e) => this.setState({ content: e.target.value })}></textarea>
                      </td>
                    </tr>
                    <tr>
                      <th height="80px">사진첨부</th>
                      <td className="imghandleForm">
                        <input type="file" accept="image/jpg,impge/png,image/jpeg,image/gif" onChange={this.handleFileImge} />
                        {img && <img src={img} />}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="butonForm">
                  <input type="submit" value="등록" />
                  <input type="button" value="취소" onClick={() => this.props.closeModal()} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WriteReview;

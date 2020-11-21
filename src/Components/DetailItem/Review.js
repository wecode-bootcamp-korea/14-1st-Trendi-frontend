import react, { Component } from "react";
import ReviewListComponet from "./ReviewListComponet";
import WriteReview from "./WriteReview";
import "./Review.scss";

class Review extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      viewSate: "all",
      viewList: [],
      writeReview: { rating: "" },
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/MOCK_DATA.json")
      // fetch("http://10.58.7.246:8000/review/4")
      .then((res) => res.json())
      .then((res) => this.setState({ viewList: res }));
  }

  modalView = (e) => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  };

  changView = (viewSate) => {
    this.setState({ viewSate });
  };

  listFilter = (value) => {
    const arrList = {
      all: () => this.state.viewList,
      imgview: () => this.state.viewList,
      textview: () => this.state.viewList.filter((el) => el.item_discount >= 1500),
    };
    return arrList[value]();
  };

  // inputData = (e) => {
  //   fetch("http://10.58.7.246:8000/review", {
  //     method: "post",
  //     body: JSON.stringify({
  //       content: "테스트 입니다",
  //       image_url: "",
  //       user_id: 1,
  //       product_id: 4,
  //       star: 4,
  //       user_information: "156cm 51kg",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // };

  // updateData = (e) => {
  //   fetch("http://10.58.7.246:8000/review", {
  //     method: "put",
  //     body: JSON.stringify({
  //       content: "aaaaaaaaaaaaaaaaaaaaaa",
  //       image_url: "",
  //       user_id: 1,
  //       // product_id: 4,
  //       review_id: 3,
  //       star: 4,
  //       user_information: "156cm 51kg",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // };

  // deleteData = (e) => {
  //   fetch("http://10.58.7.246:8000/review", {
  //     method: "delete",
  //     body: JSON.stringify({
  //       user_id: 1,
  //       // product_id: 4,
  //       review_id: 3,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // };

  render() {
    const { viewSate, modal } = this.state;
    return (
      <div className="Review">
        <div className="ReviewList">
          <header>
            <div className="writeForm" onClick={this.modalView}>
              <h1>리뷰</h1>
              <input className="writeBtnReview" type="button" value="글쓰기" onClick={this.modalView} />
              <WriteReview closeModal={this.modalView} view={modal} />
            </div>
            <div>
              <span className={`${viewSate === "all" && "selectTab"}`} onClick={() => this.changView("all")}>
                전체
              </span>
              <span className={`${viewSate === "imgview" && "selectTab"}`} onClick={() => this.changView("imgview")}>
                포토리뷰
              </span>
              <span className={`${viewSate === "textview" && "selectTab"}`} onClick={() => this.changView("textview")}>
                텍스트리뷰
              </span>
            </div>
          </header>
          <div className="layoutLine"></div>
          <ReviewListComponet reviewList={this.listFilter(viewSate)} />
        </div>
      </div>
    );
  }
}
export default Review;

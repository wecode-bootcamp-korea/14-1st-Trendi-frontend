import react, { Component } from "react";
import ReviewAllView from "./ReviewAllView";
import "./Review.scss";

class Review extends Component {
  constructor() {
    super();
    this.state = {
      viewSate: "all",
      viewList: [],
      viewFunctionTab: {
        all: () => this.state.viewList,
        imgview: () => this.state.viewList.filter((el) => el.item_discount <= 1000),
        textview: () => this.state.viewList.filter((el) => el.item_discount >= 1500),
      },
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/data/MOCK_DATA.json")
      // fetch("http://10.58.7.246:8000/review/4")
      .then((res) => res.json())
      .then((res) => this.setState({ viewList: res }));
  }

  changView = (viewSate) => {
    console.log(viewSate);
    this.setState({ viewSate });
  };

  inputData = (e) => {
    fetch("http://10.58.7.246:8000/review", {
      method: "post",
      body: JSON.stringify({
        content: "테스트 입니다",
        image_url: "",
        user_id: 1,
        product_id: 4,
        star: 4,
        user_information: "156cm 51kg",
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  updateData = (e) => {
    fetch("http://10.58.7.246:8000/review", {
      method: "put",
      body: JSON.stringify({
        content: "aaaaaaaaaaaaaaaaaaaaaa",
        image_url: "",
        user_id: 1,
        // product_id: 4,
        review_id: 3,
        star: 4,
        user_information: "156cm 51kg",
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  deleteData = (e) => {
    fetch("http://10.58.7.246:8000/review", {
      method: "delete",
      body: JSON.stringify({
        user_id: 1,
        // product_id: 4,
        review_id: 3,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  render() {
    const { viewFunctionTab, viewSate, viewList } = this.state;
    return (
      <div className="Review">
        <div className="ReviewList">
          <header>
            <h1>리뷰</h1>
            <div>
              <span onClick={() => this.changView("all")}>전체</span>
              <span onClick={() => this.changView("imgview")}>포토리뷰</span>
              <span onClick={() => this.changView("textview")}>텍스트리뷰</span>
            </div>
          </header>
          <div className="layoutLine"></div>
          {viewList.length ? <ReviewAllView reviewList={viewFunctionTab[viewSate]()} /> : "ㅋㅋ"}
          <input type="text" />
          <input type="button" onClick={this.deleteData} />
        </div>
      </div>
    );
  }
}
export default Review;

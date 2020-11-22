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
      calList: {
        content: "",
        image_url: "",
        nick_name: "",
        product: 0,
        star: 0,
        updated_at: "",
        review_id: 0,
        user_information: null,
      },
    };
  }

  componentDidMount() {
    this.loadList();
  }

  loadList = () => {
    // fetch("http://10.58.0.167:8000/review/3")
    fetch("http://10.58.0.167:8000/review/3")
      .then((res) => res.json())
      .then((res) => console.log("resrser", res));
  };

  modalView = (value) => {
    const { modal } = this.state;
    if (value === "close") {
      const calList = {
        content: "",
        image_url: "",
        nick_name: "",
        product: 0,
        star: 0,
        updated_at: "",
        user_information: null,
      };
      this.setState({ calList });
    }

    this.setState({ modal: !modal });
  };

  changView = (viewSate) => {
    this.setState({ viewSate });
  };

  listFilter = (value) => {
    const arrList = {
      all: () => this.state.viewList,
      imgview: () => this.state.viewList.filter((el) => el.image_url && el),
      textview: () => this.state.viewList.filter((el) => !el.image_url && el),
    };
    return arrList[value]();
  };

  insertApi = (insertData) => {
    this.modalView();
    fetch("http://10.58.0.167:8000/review", {
      method: "post",
      body: JSON.stringify({
        content: insertData.content,
        image_url: "",
        user_id: 1,
        product_id: 3,
        star: insertData.rating,
        user_information: "156cm 51kg",
      }),
    })
      .then((res) => res.json())
      .then((res) => res.message === "SUCCESS" && this.loadList());
  };

  updateViewSet = (data) => {
    this.setState({ calList: data });
    this.modalView();
  };

  updateViewOnChage = (data) => {
    let setUpdateObject = this.state.calList;
    setUpdateObject[data.name] = data.value;
    this.setState({ calList: setUpdateObject });
  };

  updateAPI = (updateData) => {
    fetch("http://10.58.7.246:8000/review", {
      method: "put",
      body: JSON.stringify({
        content: "aaaaaaaaaaaaaaaaaaaaaa",
        image_url: "",
        user_id: 1,
        review_id: 3,
        star: 4,
        user_information: "156cm 51kg",
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

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
    const { viewSate, modal, viewList } = this.state;
    return (
      <div className="Review">
        <div className="ReviewList">
          <header>
            <div className="writeForm" onClick={this.modalView}>
              <h1>리뷰({viewList.length})</h1>
              <input className="writeBtnReview" type="button" value="글쓰기" onClick={this.modalView} />
              <WriteReview
                closeModal={this.modalView}
                view={modal}
                insertAPI={this.insertApi}
                updateData={this.state.calList}
                updateViewOnChage={this.updateViewOnChage}
                updateAPI={this.updateAPI}
              />
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
          {viewList ? (
            <ReviewListComponet reviewList={this.listFilter(viewSate)} updateView={this.updateViewSet} />
          ) : (
            <div>리뷰가 없습니다</div>
          )}
        </div>
      </div>
    );
  }
}
export default Review;

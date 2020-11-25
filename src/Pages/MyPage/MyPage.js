import { Link } from "@material-ui/core";
import React, { Component } from "react";
import "./MyPage.scss";

class MyPage extends Component {
  constructor() {
    super();
    this.state = {
      item: [],
    };
  }
  render() {
    const { item } = this.state;
    return (
      <div className="MyPage">
        <h1>마이페이지</h1>
        <section>
          <table>
            <colgroup>
              <col width="450px"></col>
              <col width="100px"></col>
              <col width="100px"></col>
              <col width="100px"></col>
              <col width="100px"></col>
            </colgroup>
            <thead>
              <tr>
                <th>상품정보</th>
                <th>주문일자</th>
                <th>주문번호</th>
                <th>가격</th>
                <th>배송조회</th>
              </tr>
            </thead>
            <tbody>
              {Array(2)
                .fill()
                .map((el, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <div className="orderInfo">
                          <img
                            src="https://thumbnail6.coupangcdn.com/thumbnails/remote/250x250ex/image/product/image/vendoritem/2019/06/19/4436071274/c5067c72-eb35-4900-88df-a38378fc8710.jpg"
                            alt="상품이미지"
                          ></img>
                          <div className="orderItem">
                            <label className="itemNmae">벤션 9in1 올인원 컨버ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ터 도킹 스테이션</label>
                            <label className="itemOption">옵션 1번</label>
                          </div>
                        </div>
                      </td>
                      <td>2020.10.27</td>
                      <td>4112384012</td>
                      <td>
                        <div className="itemPrice">69,900원/1개</div>
                      </td>
                      <td>배송조회</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}
export default MyPage;

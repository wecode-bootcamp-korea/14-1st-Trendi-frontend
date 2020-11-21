import react, { Component } from "react";
import "./Complete.scss";

class Complete extends Component {
  render() {
    return (
      <div className="Complete">
        <div className="coverform">
          <img src="images/signup_complete.png" alt="회원가입완료 이미지"></img>
          <h1>트랜디 회원가입을 축하 드립니다!!</h1>
          <div className="layoutLine"></div>
          <input type="button" className="returnMain" value="바료 쇼핑하기" />
        </div>
      </div>
    );
  }
}
export default Complete;

import react, { Component } from "react";
import StatusView from "./StatusView";
import "./Complete.scss";

class Complete extends Component {
  hadleOnclick = () => {
    this.props.history.push("/main");
  };
  render() {
    return (
      <div className="Complete">
        <StatusView status="complete" />
        <div className="coverform">
          <img src="images/signup_complete.png" alt="회원가입완료 이미지"></img>
          <h1>트랜디 회원가입을 축하 드립니다!!</h1>
          <div className="layoutLine"></div>
          <input type="button" className="returnMain" value="바료 쇼핑하기" onClick={this.hadleOnclick} />
        </div>
      </div>
    );
  }
}
export default Complete;

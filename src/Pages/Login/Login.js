import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  InSingUp = () => {
    fetch("10.58.6.55:8000/user/signup", {
      method: "post",
      body: JSON.stringify({
        // user_name : "신재훈",
        // user
      }),
    });
    this.props.history.push("/SignUp");
  };

  render() {
    return (
      <div className="Login">
        <div>
          <h1>오늘 사면 내일 도착?</h1>
          <h2>유료배송으로 내일 받는 트랜디 Login!!</h2>
          <form>
            <input className="inputTextbox" placeholder="아이디 입력" />
            <input className="inputTextbox" placeholder="비밀번호 입력" />
            <input className="LoginBtn" type="button" value="로그인" />
            <input className="SignUpBtn" type="button" value="회원가입" onClick={this.InSingUp} />
          </form>
          <div className="boundaryLine"></div>
          <div className="otherLogin">
            <label>간편로그인 / 가입</label>
            <div>
              <img></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;

import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: "",
    };
  }

  setLoginData = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  Sigin = () => {
    const { id, password } = this.state;
    if (id && password) {
      fetch("http://10.58.1.4:8000/user/login", {
        method: "post",
        body: JSON.stringify({
          nick_name: id,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.TOKEN) {
            document.cookie = `user_name=${res.user_name}`;
            document.cookie = `token_id=${res.TOKEN}`;
            this.props.history.push("/");
          } else {
            alert("ID , pasword를 확인해 주세요");
          }
        });
    } else {
      alert("아이뒤 비밀번호를 입력해 주세요");
    }
  };

  chagePage = () => {
    this.props.history.push("/SignUp");
  };

  render() {
    return (
      <div className="Login">
        <div>
          <h1>오늘 사면 내일 도착?</h1>
          <h2>유료배송으로 내일 받는 트랜디 Login!!</h2>
          <form>
            <input className="inputTextbox" name="id" placeholder="아이디 입력" onChange={this.setLoginData} />
            <input className="inputTextbox" name="password" type="password" placeholder="비밀번호 입력" onChange={this.setLoginData} />
            <div className="boundaryLine"></div>
            <input className="LoginBtn" type="button" value="로그인" onClick={this.Sigin} />
            <input className="SignUpBtn" type="button" value="회원가입" onClick={this.chagePage} />
          </form>
        </div>
      </div>
    );
  }
}
export default Login;

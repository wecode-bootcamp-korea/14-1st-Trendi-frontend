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
    fetch("http://10.58.1.4:8000/user/login", {
      method: "post",
      body: JSON.stringify({
        nick_name: id,
        password: password,
      }),
    }).then((res) => res.json());
    // .then((res) => {
    //   if (res.TOKEN) {
    //     document.cookie = "token_id" + "=" + res.TOKEN;
    //   } else {
    //     console.log("!11");
    //   }
    // });
  };

  kakaoSigin = (e) => {
    fetch(
      "https://kauth.kakao.com/oauth/authorize?client_id=0293d652aa9ceeae7cafb055c7a3bbb2&redirect_uri=http://10.58.7.185:3000&response_type=code",
      { credentials: "include" }
    )
      .then((res) => {
        console.log(res);
        // if (res.redirected) {
        //   window.location.href = res.url;
        // }
      })
      .catch(function (err) {
        console.info(err);
      });
    // .then((res) => {
    //   if (res.TOKEN) {
    //     document.cookie = "token_id" + "=" + res.TOKEN;
    //   } else {
    //     console.log("!11");
    //   }
    // })
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
            <input className="LoginBtn" type="button" value="카카오 로그인" onClick={this.kakaoSigin} />
            <input className="LoginBtn" type="button" value="로그인" onClick={this.Sigin} />
            <input className="SignUpBtn" type="button" value="회원가입" />
          </form>
          <div className="boundaryLine"></div>
          <div className="otherLogin">
            <label>간편로그인 / 가입</label>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;

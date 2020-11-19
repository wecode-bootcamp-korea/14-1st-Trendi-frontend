import React, { Component } from "react";
import StatusView from "./StatusView";
import "./SignUpInfo.scss";

class SignUpInfo extends Component {
  constructor() {
    super();

    this.state = {
      id: {
        state: false,
        value: "",
        check: (value) => {
          return /^[A-Za-z]{1}[A-Za-z0-9]{5,19}$/.test(value) ? true : false;
        },
      },
      email: {
        state: false,
        value: "",
        check: (value) => {
          return /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(value) ? true : false;
        },
      },
      password: {
        state: false,
        value: "",
        check: (value) => {
          return /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,19}$/.test(value) ? true : false;
        },
      },
      passwordCheck: {
        state: false,
        value: "",
        check: (value) => {
          return this.state.password.value === value ? true : false;
        },
      },
      userName: {
        state: false,
        value: "",
        check: (value) => {
          return /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/.test(value) ? true : false;
        },
      },
    };
  }
  validationCheck = (e) => {
    const { name, value } = e.target;
    const isValidation = this.state[name].check(value);

    if (name === "id" || name === "email") {
      fetch(configData.Login, {
        method: "post",
        body: JSON.stringify({
          nick_name: value,
        }),
      }).then((res) => console.log(res.json()));
    }

    let prev = this.state[name];
    prev.state = isValidation;
    prev.value = value;
    this.setState({
      [name]: prev,
    });
  };

  SignUpSendInfo = (e) => {
    const { id, email, password, userName } = this.state;
    fetch("/signup/signup", {
      method: "post",
      body: JSON.stringify({
        user_name: userName.value,
        nick_name: id.value,
        password: password.value,
        email: email.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => (res.MESSAGE === "SUCCESS" ? console.log("완성") : console.log("실패")));
  };

  render() {
    const { id, password, email, passwordCheck, userName } = this.state;
    return (
      <div className="SignUpInfo">
        <StatusView status="info" />
        <form>
          <div>
            <div>
              <label>아이디</label>
              <input type="text" name="id" placeholder="아이디 입력" onBlur={this.validationCheck} />
              <img className={id.state ? "imgShow" : ""} src="images/lock.png" alt="id통과이미지" />
              <div className="errorMsg">
                {id.value.length ? (id.state ? "" : "길이는 6~20 사이, 한글 및 특수문자는 사용하실수 없습니다.") : ""}
              </div>
            </div>
            <div>
              <label>비밀번호</label>
              <input type="password" name="password" placeholder="비밀번호 입력" onBlur={this.validationCheck} />
              <img className={password.state ? "imgShow" : ""} src="images/lock.png" alt="비밀번호 패스 이미지" />
              <div className="errorMsg">
                {password.value.length ? (password.state ? "" : "비밀번호는 최소 8자 이상, 특수문자, 대문자, 소문자를 입력해주세요") : ""}
              </div>
            </div>
            <div>
              <label>비밀번호 재확인</label>
              <input type="password" name="passwordCheck" placeholder="비밀번호 확인" onBlur={this.validationCheck} />
              <img className={passwordCheck.state ? "imgShow" : ""} src="images/lock.png" alt="비밀번호 확인 패스 이미지" />
              <div className="errorMsg">
                {passwordCheck.value.length ? (passwordCheck.state ? "" : "비밀번호가 일치 하지 않습니다") : ""}
              </div>
            </div>
            <div>
              <label>E-mail</label>
              <input type="text" name="email" placeholder="이메일 입력" onBlur={this.validationCheck} />
              <div className="errorMsg">{email.value.length ? (email.state ? "" : "이메일 주소를 다시 확인해주세요") : ""}</div>
            </div>
            <div>
              <label>이름</label>
              <input type="text" name="userName" placeholder="이름 입력" onBlur={this.validationCheck} />
              <div className="errorMsg">
                {userName.value.length ? (userName.state ? "" : "이름 숫자, 특수문자를 사용할 수 없습니다.") : ""}
              </div>
            </div>
          </div>
          <div className="boundaryLine"></div>
          <input className="SignUpInfoBtn" type="button" name="signup" value="다음" onClick={this.SignUpSendInfo} />
        </form>
      </div>
    );
  }
}

export default SignUpInfo;

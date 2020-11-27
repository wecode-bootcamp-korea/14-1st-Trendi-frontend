import React, { Component } from "react";
import StatusView from "./StatusView";
import config from "../../config.json";
import "./SignUpInfo.scss";

class SignUpInfo extends Component {
  constructor() {
    super();

    this.state = {
      nick_name: {},
      email: {},
      password: {},
      passwordCheck: {},
      userName: {},
    };
  }

  validationfilter = (type, value) => {
    const filter = {
      nick_name: /^[A-Za-z]{1}[A-Za-z0-9]{5,19}$/.test(value) ? true : false,
      email: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(value) ? true : false,
      password: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,19}$/.test(value) ? true : false,
      passwordCheck: this.state.password.value === value ? true : false,
      userName: /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/.test(value) ? true : false,
    };
    return filter[type];
  };

  validationCheck = (e) => {
    const { name, value, dataset } = e.target;
    let isValidation = this.validationfilter(name, value);
    let prev = this.state[name];

    if ((name === "nick_name" || name === "email") && isValidation) {
      fetch(`${config.SIGNUP}-${dataset.key}`, {
        method: "post",
        body: JSON.stringify({
          [name]: value,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          res.MESSAGE === "SUCCESS" ? (isValidation = true) : (isValidation = false);
          prev.state = isValidation;
          prev.value = value;
          this.setState({
            [name]: prev,
          });
        });
    } else {
      prev.state = isValidation;
      prev.value = value;
      this.setState({
        [name]: prev,
      });
    }
  };

  SignUpSendInfo = (e) => {
    const { nick_name, email, password, userName } = this.state;
    fetch(`${config.SIGNUP}`, {
      method: "post",
      body: JSON.stringify({
        user_name: userName.value,
        nick_name: nick_name.value,
        password: password.value,
        email: email.value,
      }),
    })
      .then((res) => res.json())
      .then((res) =>
        res.MESSAGE === "SUCCESS"
          ? (this.props.history.push("/login"), alert("환영합니다. 즐거운 쇼핑되세요"))
          : alert("다시 입력해 주세요")
      );
  };

  render() {
    const { nick_name, password, email, passwordCheck, userName } = this.state;
    return (
      <div className="SignUpInfo">
        <StatusView status="info" />
        <form>
          <div>
            <div>
              <label>아이디</label>
              <input type="text" name="nick_name" data-key="nick-name" placeholder="아이디 입력" onBlur={this.validationCheck} />
              <img className={nick_name.state ? "imgShow" : ""} src="images/lock.png" alt="id통과이미지" />
              <div className="errorMsg">
                {nick_name.value ? (nick_name.state ? "" : "길이는 6~20 사이, 한글 및 특수문자는 사용하실수 없습니다.") : ""}
              </div>
            </div>
            <div>
              <label>비밀번호</label>
              <input type="password" name="password" placeholder="비밀번호 입력" onBlur={this.validationCheck} />
              <img className={password.state ? "imgShow" : ""} src="images/lock.png" alt="비밀번호 패스 이미지" />
              <div className="errorMsg">
                {password.value
                  ? password.state
                    ? ""
                    : "비밀번호는 최소 8자 이상, 특수문자, 대문자, 소문자를 입력해주세요"
                  : ""}
              </div>
            </div>
            <div>
              <label>비밀번호 재확인</label>
              <input type="password" name="passwordCheck" placeholder="비밀번호 확인" onBlur={this.validationCheck} />
              <img className={passwordCheck.state ? "imgShow" : ""} src="images/lock.png" alt="비밀번호 확인 패스 이미지" />
              <div className="errorMsg">
                {passwordCheck.value ? (passwordCheck.state ? "" : "비밀번호가 일치 하지 않습니다") : ""}
              </div>
            </div>
            <div>
              <label>E-mail</label>
              <input type="text" name="email" data-key="email" placeholder="이메일 입력" onBlur={this.validationCheck} />
              <div className="errorMsg">{email.value ? (email.state ? "" : "이메일 주소를 다시 확인해주세요") : ""}</div>
            </div>
            <div>
              <label>이름</label>
              <input type="text" name="userName" placeholder="이름 입력" onBlur={this.validationCheck} />
              <div className="errorMsg">
                {userName.value ? (userName.state ? "" : "이름 숫자, 특수문자를 사용할 수 없습니다.") : ""}
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

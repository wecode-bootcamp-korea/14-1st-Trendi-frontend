import React, { Component } from 'react';
import configData from '../../config.json';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      password: '',
    };
  }

  setLoginData = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  Sigin = () => {
    const { id, password } = this.state;
    if (id && password) {
      fetch(`${configData.LOGIN}`, {
        method: 'post',
        body: JSON.stringify({
          nick_name: id,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.TOKEN) {
            localStorage.setItem('token', `${res.TOKEN}`);
            localStorage.setItem('user_name', `${res.user_name}`);
            this.props.history.push('/');
          } else {
            alert('ID , pasword를 확인해 주세요');
          }
        });
    } else {
      alert('아이뒤 비밀번호를 입력해 주세요');
    }
  };

  chagePage = () => {
    this.props.history.push('/SignUp');
  };

  render() {
    return (
      <div className="Login">
        <div class="layoutCenter">
          <h1>오늘 사면 내일 도착?</h1>
          <h2>유료배송으로 내일 받는 트랜디 Login!!</h2>
          <form>
            <input className="inputTextbox" name="id" placeholder="아이디 입력" onChange={this.setLoginData} />
            <input
              className="inputTextbox"
              name="password"
              type="password"
              placeholder="비밀번호 입력"
              onChange={this.setLoginData}
            />
            <input className="LoginBtn" type="button" value="로그인" onClick={this.Sigin} />
            <input className="SignUpBtn" type="button" value="회원가입" onClick={this.chagePage} />
            <div className="findContainer">
              <div className="findBox">아이디 찾기</div>
              <div className="findBox">|</div>
              <div className="findBox">비밀번호 찾기</div>
            </div>
            <div className="boundaryLine"></div>
          </form>
          <div className="logoContainer">
            <div className="facebookLogoBox">
              <div className="imgBox">
                <img src="/images/facebook.png" alt="페이스북 로고" />
              </div>
              <div className="explanation">Facebook으로 시작하기</div>
            </div>
            <div className="googleLogoBox">
              <div className="imgBox">
                <img src="/images/google.png" alt="구글" />
              </div>
              <div className="explanation">Google 계정으로 시작하기</div>
            </div>
          </div>
          <div className="appleLogobox">
            <div className="imgBox2">
              <img src="/images/apple.png" alt="애플" />
            </div>
            <div className="explanation2">Apple로 시작하기</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;

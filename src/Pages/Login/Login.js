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

  signin = () => {
    const { id, password } = this.state;
    if (id && password) {
      fetch('API주소', {
        method: 'POST',
        body: JSON.stringify({
          id: id,
          password: password, //id,password는 백엔드랑 약속 한 부분
        }),
      })
        .then((res) => res.json()) //(1)첫번째 then에서 server에서 보내준 response를 object 형태로 변환한다.
        .then((res) => { //(2)두번째 then에서는 object로 변환한 response를 확인한다.
          if (res.TOKEN) { //(3)로그인이 성공하면 백엔드에서 토큰을 준다.
            localStorage.setItem('token', `${res.TOKEN}`); //`token`과 `user_name`을 로컬 스토리지에 저장한다.
            localStorage.setItem('user_name', `${res.user_name}`);
            this.props.history.push('/');
          } else {
            alert('ID , pasword를 확인해 주세요');
          }
        })
        .catch((err) => console.log(err));
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
            <input className="inputTextbox" name="password" type="password" placeholder="비밀번호 입력" onChange={this.setLoginData} />
            <input className="LoginBtn" type="button" value="로그인" onClick={this.signin} />
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
              <div className="explanation2">Facebook으로 시작하기</div>
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

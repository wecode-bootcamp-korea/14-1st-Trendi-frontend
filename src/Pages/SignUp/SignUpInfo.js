import React, { Component } from 'react';
import './SignUpInfo.scss';

class SignUpInfo extends Component {
  render() {
    return (
      <div className="SignUpInfo">
        <form>
          <div>
            <input type="text" placeholder="아이디 입력"/>
            <input tyle="text" placeholder="이메일 입력"/>
          </div>
          <div>이메일 정보는 비밀번호 찾기시 사용됩니다.</div>
          <div>
            <input type="text" placeholder="비밀번호 입력"/>
            <input type="text" placeholder="비밀번호 확인"/>
          </div>
          <div className="boundaryLine"></div>
          <input type="button" value="다음"/>
        </form>
      </div>
    );
  }
}

export default SignUpInfo;

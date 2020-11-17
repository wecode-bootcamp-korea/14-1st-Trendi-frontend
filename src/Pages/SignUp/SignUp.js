import React, { Component } from 'react';
import Agreement from './Agreement'
import './SignUp.scss'

class SignUp extends Component{
  constructor(){
    super();

    this.state={
      allCheckd : false,
      agreement : []
    }
  }
  componentDidMount(){
    let agreement = [];
    agreementList.forEach(el=>{
      let obj = {
        isCheck : false,
        content : el
      }
      agreement.push(obj)
    })
    this.setState({agreement})
  }
  
  isCheck = (e) => {
    const target = e.target;
    let agreement = this.state.agreement;
    let allCheckd = true;
    
    if(target.name === "all"){
      allCheckd = !this.state.allCheckd;
      agreement.map(el=>el.isCheck = target.checked)
    }else{
      agreement.forEach((el, index)=>{
        el.isCheck = (index === parseInt(target.name)) ? !el.isCheck : el.isCheck;
        allCheckd = allCheckd && el.isCheck ? true : false;
      })
    }
    this.setState({agreement , allCheckd});
  }

  nextSignUp = (e) => {
    e.preventDefault();
    const {agreement} = this.state;
    let comparison = true;
    agreement.some((el)=>{
      comparison = comparison && el.isCheck ? true : false 
      if(!comparison){
        alert(el.content+"를 확인 해주세요");
        return true;
      }
    });
    if(comparison) this.props.history.push('/SignUpInfo');
  }
 
  render(){
    const {agreement, allCheckd} = this.state;
    return(
      <div className="SignUp">
        <div className="SignUpTitle">회원가입</div>
        <div className="nowState">
          <div>정보수집동의</div>
          <div>정보입력</div>
          <div>가입완료</div>
        </div>
        <form onSubmit={this.nextSignUp}>
          <label><input type="checkbox" checked={allCheckd}  name="all" onChange={this.isCheck}/>모두 동의</label>
            <div className="checkboxForm">
              {agreement.map((el, index)=> <Agreement data={el} index={index} isCheck={this.isCheck} key={index}/>)}
            </div>
          <input type="submit" value="다음"/>
        </form>
      </div>
    );
  }
}
export default SignUp;

const agreementList = ["우리는 국가와 국민에 충성을 다하는 대한민국 국민이다",
"하나,우리는 자유민주주의를 수호하며 조국통일의 역군이다.",
"둘, 우리는 실전과 같은 훈련으로 지상전의 승리자가 된다",
"셋, 우리는 법규를 준수하고 상관의 명령에 복종한다",
"넷,우리는 명예와 신의를 지키며 전우애로 굳게 단결한다."]
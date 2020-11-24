import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="none">
          <div className="container">
            <div className="customerService">
              <div className="leftBox1">고객센터 1566-6575</div>
              <div className="leftBox2">
                <div className="time">영업시간 : AM 10:00 ~ PM 17:00(주말 및 공휴일 휴무)</div>
                <div className="time">점심시간 : PM 12:30 ~ PM 13:30</div>
              </div>
            </div>
            <div className="rightBox">
              {FOOTER_BOTTOM.map((el) => {
                return (
                  <div className="snsContainer">
                    <div className="snsBox">
                      <img className="snsImg" src={el.img} alt="사진"></img>
                    </div>
                    <div className="snsComent">{el.comment}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="footerBottom"></div>
        </div>
      </div>
    );
  }
}

export default Footer;

const FOOTER_BOTTOM = [
  {
    id: 1,
    comment: '자주 묻는 질문',
    img: 'https://www.brandi.co.kr/static/20.08.01/images/icon_footer_01.png',
  },
  {
    id: 2,
    comment: '카톡 플러스 친구',
    img: 'https://www.brandi.co.kr/static/20.08.01/images/icon_footer_02.png',
  },
  {
    id: 3,
    comment: '페이스북',
    img: 'https://www.brandi.co.kr/static/20.08.01/images/icon_footer_03.png',
  },
  {
    id: 4,
    comment: '인스타그램',
    img: 'https://www.brandi.co.kr/static/20.08.01/images/icon_footer_04.png',
  },
];

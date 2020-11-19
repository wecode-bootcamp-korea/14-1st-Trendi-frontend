import React, { Component } from 'react';
import DropDownBox from './DropDownBox';
import './ItemSection.scss';

class ItemSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ItemSection">
        <section className="section">
          <header className="header">
            <div className="storeBox">
              <div className="store">
                <img src="./images/home.png" alt="가게이름" />
              </div>
              <div className="storeComment">프린세스 스토어</div>
            </div>
            <div className="title">
              [후기극찬!기모버전>] XL까지, 착붙 스판 하이웨스트 쫀득 스키니 레깅스 팬츠
              _유어아운스퀘어
            </div>
          </header>
          <article className="article">
            <div className="priceBox">
              <div className="discount">10%</div>
              <div className="discountPrice">16,200</div>
              <span class="discountPriceWon">원</span>
              <div className="price">18,000</div>
              <span class="priceWon">원</span>
            </div>
            <div className="reviewBox">
              {STAR.map(() => {
                return (
                  <div className="starBox">
                    <img className="star" src="./images/star.png" alt="별" />
                  </div>
                );
              })}
              <div className="review">26개 리뷰보기</div>
            </div>
            <div className="shippingBox">
              <div className="shippingInfo">배송정보</div>
              <div className="arriveBox">
                <div className="haruBox">
                  <div className="arriveComment">11/20(금)도착예정</div>
                  <div className="haruImg">
                    <img src="./images/haru.png" alt="하루배송" />
                  </div>
                </div>
                <div className="comment">하루배송 상품 내일 오후 2시 전 결제 시 적용</div>
              </div>
            </div>
          </article>
          <DropDownBox />
        </section>
      </div>
    );
  }
}

export default ItemSection;

const STAR = [
  { img: './images/star.png' },
  { img: './images/star.png' },
  { img: './images/star.png' },
  { img: './images/star.png' },
  { img: './images/star.png' },
];

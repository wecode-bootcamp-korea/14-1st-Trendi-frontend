import React, { Component } from 'react';
import './DetailItem.scss';

class DetailItem extends Component {
  render() {
    return (
      <div className="DetailItem">
        <div className="noneDetailItem">
          <div className="itemBox">
            {/*<!-- 컴포넌트 만들것 -->*/}
            <aside className="aside">
              <div className="pictureBox">
                <div className="bigPictureBox">
                  <img className="bigPicture" src="./images/clothes1.png" alt="대표 사진" />
                </div>
                <div className="pictureListBox">
                  <div className="pictureList">
                    <img src="./images/clothes2.png" alt="사진 리스트" />
                  </div>
                  <div className="pictureList">
                    <img src="./images/clothes2.png" alt="사진 리스트" />
                  </div>
                  <div className="pictureList">
                    <img src="./images/clothes2.png" alt="사진 리스트" />
                  </div>
                  <div className="pictureList">
                    <img src="./images/clothes2.png" alt="사진 리스트" />
                  </div>
                  <div className="pictureList">
                    <img src="./images/clothes2.png" alt="사진 리스트" />
                  </div>
                </div>
              </div>
            </aside>
            {/*<!-- 컴포넌트 만들것 -->*/}
            {/*<!-- 섹션 컴포넌트 만들것 1 -->*/}
            <section className="section">
              <header className="header">
                <div className="storeBox">
                  <div className="store">
                    <img src="./images/home.png" alt="가게이름" />
                  </div>
                  <div className="storeComment">프린세스 스토어</div>
                  <button>></button>
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
                  <div className="starBox">
                    <img className="star" src="./images/star.png" alt="별" />
                  </div>
                  <div className="starBox">
                    <img className="star" src="./images/star.png" alt="별" />
                  </div>
                  <div className="starBox">
                    <img className="star" src="./images/star.png" alt="별" />
                  </div>
                  <div className="starBox">
                    <img className="star" src="./images/star.png" alt="별" />
                  </div>
                  <div className="starBox">
                    <img className="star" src="./images/star.png" alt="별" />
                  </div>
                  <div className="review">26개 리뷰보기</div>
                </div>
                <div className="shippingBox">
                  <div className="shippingInfo"></div>
                  <div className="arriveBox">
                    <div className="haruBox">
                      <div>11/20(금)도착예정</div>
                      <div>
                        <img src="" alt="하루배송" />
                      </div>
                    </div>
                    <div className="comment">하루배송 상품 내일 오후 2시 전 결제 시 적용</div>
                  </div>
                </div>
              </article>
              <footer></footer>
            </section>
            {/*<!-- 섹션 컴포넌트 만들것 2 -->*/}
          </div>
        </div>
      </div>
    );
  }
}

export default DetailItem;

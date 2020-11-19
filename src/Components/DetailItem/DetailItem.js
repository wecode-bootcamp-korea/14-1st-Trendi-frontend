import React, { Component } from 'react';
import Select from 'react-select';
import './DetailItem.scss';

class DetailItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'start',
      options: [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' },
        { value: 'berry', label: 'Berry' },
      ],
    };
  }

  render() {
    const { options } = this.state;
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
                    <img src="./images/clothes1.png" alt="사진 리스트" />
                  </div>
                  <div className="pictureList">
                    <img src="./images/clothes2.png" alt="사진 리스트" />
                  </div>
                  <div className="pictureList">
                    <img src="./images/clothes3.png" alt="사진 리스트" />
                  </div>
                  <div className="pictureList">
                    <img src="./images/clothes4.png" alt="사진 리스트" />
                  </div>
                  <div className="pictureList">
                    <img src="./images/clothes5.png" alt="사진 리스트" />
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
                {/*<!-- 드롭다운 컴포넌트 만들것 1 -->*/}
                <form className="dropDownContainer">
                  <Select className="select1" options={options} defaultValue={options[0]} />
                  <Select className="select2" options={options} defaultValue={options[1]} />
                </form>
              </article>
              <footer className="footer">
                <div className="orderContainer">
                  <div className="orderWrap">
                    <div className="orderBox">
                      <div className="orderBox2">
                        <div className="order">
                          <div className="order1">블랙</div>
                          <div className="delivery">일반배송</div>
                        </div>
                        <div className="buttonBox">
                          <button>X</button>
                        </div>
                      </div>
                      <div className="orderBottomBox">
                        <div className="orderBottom">
                          <button className="minus">-</button>
                          <div className="number">1</div>
                          <button className="plus">+</button>
                        </div>
                        <div className="orderPriceBox">
                          <div className="orderPrice1">19,200</div>
                          <div className="orderPrice2">원</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
                <div className="wrapPrice">
                  <div className="priceBox">
                    <div className="priceComent">총 상품금액</div>
                    <div className="price">1000원</div>
                  </div>
                </div>
              </footer>
              {/*<!-- 드롭다운 컴포넌트 만들것 1 -->*/}
            </section>
            {/*<!-- 섹션 컴포넌트 만들것 2 -->*/}
          </div>
        </div>
      </div>
    );
  }
}

export default DetailItem;

import React, { Component } from 'react';
import './DetailItem.scss';

class DetailItem extends Component {
  render() {
    return (
      <div className="DetailItem">
        <div className="none">
          <div className="itemBox">
            <aside>
              <div className="pictureBox">
                <div className="bigPicture"></div>
                <div className="pictureList"></div>
              </div>
            </aside>
            <section>
              <header>
                <div className="store">
                  <img src="" alt="가게이름" />
                </div>
                <div className="title"></div>
              </header>
              <article>
                <div className="priceBox">
                  <div className="discount">10%</div>
                  <div className="discountPrice">16,200</div>
                  <div className="price">18,000</div>
                  <button className="cuppon">쿠폰받기</button>
                </div>
                <div className="appliedPrice">
                  <div>쿠폰적용가</div>
                  <div>15,600</div>
                </div>
                <div className="saveBox">
                  <div className="save">최대 162원 적립</div>
                  <div className="saveIcon"></div>
                </div>
              </article>
              <footer></footer>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailItem;

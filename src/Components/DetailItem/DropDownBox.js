import React, { Component } from 'react';
import Select from 'react-select';
import './DropDownBox.scss';

class DropDownBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="DropDownBox">
        <form className="dropDownContainer">
          <Select className="select1" options={COLLOR} defaultValue={COLLOR[0]} />
          <Select className="select2" options={SIZE} defaultValue={SIZE[0]} />
        </form>
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
          </div>
          <div className="wrapPrice">
            <div className="priceBox">
              <div className="priceComment">총 상품금액</div>
              <div className="price">1000원</div>
            </div>
          </div>
          <div className="purchaseBox">
            <div className="directPurchase">바로 구매</div>
            <div className="logoContainer">
              <div className="logoBox">
                <img className="naverLogo" src="./images/naver.png" alt="네이버 로고" />
              </div>
              <div className="pay">Pay 구매</div>
            </div>
            <div className="cartBox">
              <img className="cart" src="./images/cart.png" alt="카트" />
            </div>
            <div className="heartBox">
              <img className="heart" src="./images/heart.png" alt="하트" />
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default DropDownBox;

const COLLOR = [
  { value: 'default', label: '[컬러]를 선택하세요.' },
  { value: 'black', label: '블랙' },
  { value: 'yellow', label: '옐로우' },
  { value: 'gray', label: '그레이' },
];

const SIZE = [
  { value: 'default', label: '[사이즈]를 선택하세요.' },
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
];

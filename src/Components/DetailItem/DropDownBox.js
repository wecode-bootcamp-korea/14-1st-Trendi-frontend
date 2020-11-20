import React, { Component } from 'react';
import Select from 'react-select';
import './DropDownBox.scss';
import OrderBox from './OrderBox';

class DropDownBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      value: '',
      size: '',
      selectPrice: 16200,
      defaultPrice: 0,
      click: false,
      click2: false,
      item: [],
      orderBox: [],
      priceBox: 0,
    };
  }

  componentDidMount() {
    this.setState({});
  }
  // 상품 클릭시 클릭 바뀌게
  handleChange = (e) => {
    const { number } = this.state;
    this.setState({ number: number + 1, value: e.label });
  };

  //사이즈 클릭시 값이 누적되고 오더박스 카드가 생김,카드 종류별로 담아주는 기능 구현
  handleSizeCheck = (e) => {
    const { click2, selectPrice, item, value, orderBox, id2 } = this.state;
    let arr = [...item];
    arr.push(selectPrice);
    let totalPrice = arr.reduce((acc, obj) => acc + obj, 0);
    //중복된 배열이 있을때 걸러주는 기능 추가
    let orderBox2 = [...orderBox];
    let orderBox3 = orderBox2.filter((el) => (el.value === value && el.size === e.label ? el : ''));
    if (orderBox3 == '') orderBox2.push({ id2, value, size: e.value, priceBox: 16200 });

    this.setState({
      value,
      click2: !click2,
      defaultPrice: selectPrice,
      item: arr,
      priceBox: totalPrice,
      orderBox: orderBox2,
    });
  };

  render() {
    const { priceBox, number, orderBox } = this.state;

    return (
      <div className="DropDownBox">
        <form className="dropDownContainer">
          <Select
            className="select1"
            onChange={this.handleChange}
            options={COLLOR}
            defaultValue={COLLOR[0]}
          />
          {number > 0 && (
            <Select
              className="select2"
              onChange={this.handleSizeCheck}
              options={SIZE}
              defaultValue={SIZE[0]}
            />
          )}
        </form>
        <footer className="footer">
          {orderBox.map((el) => {
            return (
              <OrderBox key={el.value} value={el.value} size={el.size} priceBox={el.priceBox} />
            );
          })}
          <div className="wrapPrice">
            <div className="priceBox">
              <div className="priceComment">총 상품금액</div>
              <div className="priceBox2">
                <div className="price">{priceBox}</div>
                <div className="price">원</div>
              </div>
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
  { id: 0, value: 'default', label: '[컬러]를 선택하세요.' },
  { id: 1, value: 'Black', label: '블랙' },
  { id: 2, value: 'Yellow', label: '옐로우' },
  { id: 3, value: 'Gray', label: '그레이' },
];

const SIZE = [
  { id: 0, value: 'default', label: '[사이즈]를 선택하세요.' },
  { id: 1, value: 'Small', label: 'Small' },
  { id: 2, value: 'Medium', label: 'Medium' },
  { id: 3, value: 'Large', label: 'Large' },
];

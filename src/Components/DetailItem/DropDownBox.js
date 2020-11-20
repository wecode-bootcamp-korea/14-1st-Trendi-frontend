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
  handleChange = (el) => {
    const { click, number } = this.state;
    this.setState({ number: number + 1, value: el.label });
  };

  //사이즈 클릭시 값이 누적되고 오더박스 카드가 생김
  handleSizeCheck = (e) => {
    // console.log('e는 뭐지?', e);
    const { click2, selectPrice, item, value, click, orderBox } = this.state;
    let arr = [...item];
    arr.push(selectPrice);
    // console.log('arr에 item[] 복사됨 : ', arr);
    let totalPrice = arr.reduce((acc, obj) => acc + obj, 0);
    // console.log('totalPrice에 값이 더해짐 :', totalPrice);
    let orderBox2 = [...orderBox];
    orderBox2.push({ value, size: e.value, priceBox: 16200 });
    //중복된 배열이 있을때 걸러주는 기능 추가
    const filterItem = orderBox2;
    const result = (a, b) => {
      const newArray = [];
      const obj = {};
      for (let i in a) {
        obj[a[i][b]] = a[i];
      }
      for (let i in obj) {
        newArray.push(obj[i]);
      }
      return newArray;
    };
    const uniqueArray = result(filterItem, 'size');

    this.setState({
      value,
      size: e.label,
      click2: !click2,
      defaultPrice: selectPrice,
      item: arr,
      priceBox: totalPrice,
      orderBox: uniqueArray,
    });
  };

  render() {
    const { click, value, size, priceBox, click2, number } = this.state;
    console.log('orderBox :', this.state.orderBox);

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
          {this.state.orderBox.map((el) => {
            return <OrderBox value={el.value} size={el.size} priceBox={el.priceBox} />;
          })}
          {/* {click2 && <OrderBox value={value} size={size} priceBox={priceBox} />} */}

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

const TEST = [
  '블랙small',
  '블랙medium',
  '블랙large',
  '옐로우small',
  '옐로우medium',
  '옐로우large',
  '그레이small',
  '그레이medium',
  '그레이large',
];

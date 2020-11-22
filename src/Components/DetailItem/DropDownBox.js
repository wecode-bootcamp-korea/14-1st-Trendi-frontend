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
      amount: 1,
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

  componentDidUpdate(prevprops, prevstate) {
    if (prevstate.orderBox !== this.state.orderBox) {
      console.log('orderBox : ', this.state.orderBox);
    }
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
    //중복된 배열이 있을때 걸러주는 기능 추가
    let orderBox2 = [...orderBox];
    let orderBox3 = orderBox2.filter((el) => (el.value === value && el.size === e.label ? el : ''));
    if (orderBox3 == '')
      orderBox2.push({ idx: Date.now(), value, size: e.value, priceBox: 16200, amount: 1 });

    this.setState({
      value,
      click2: !click2,
      defaultPrice: selectPrice,
      item: arr,
      orderBox: orderBox2,
    });
  };

  handlePlus = (el) => {
    const { orderBox } = this.state;
    console.log('el안녕 : ', el);
    // 1. indexOf로 푸는 방법
    // const orderBox = [...this.state.orderBox];
    // orderBox[orderBox.indexOf(el)].amount++;
    // this.setState({ orderBox });

    // 2. map으로 푸는 방법
    let orderBoxMap = orderBox.map((orderbox) => {
      if (el.idx === orderbox.idx) {
        orderbox.amount = orderbox.amount + 1;
      }
      return orderbox;
    });

    this.setState({ orderBox: orderBoxMap });
  };

  handleMinus = (el) => {
    const { orderBox } = this.state;
    let orderBoxMinus = orderBox.map((orderbox) => {
      if (el.idx === orderbox.idx) {
        orderbox.amount = orderbox.amount - 1;
      }
      return orderbox;
    });
    if (orderBoxMinus[orderBoxMinus.indexOf(el)].amount < 1) {
      return (orderBoxMinus[orderBoxMinus.indexOf(el)].amount = 1);
    }
    this.setState({ orderBox: orderBoxMinus });
  };

  render() {
    const { priceBox, number, orderBox, amount } = this.state;
    console.log('priceBox : ', priceBox);
    // console.log('index확인 : ', orderBox.indexOf();
    // console.log('amount : ', orderB;
    console.log('priceBox * amount : ', priceBox * amount);
    // const amountSum=
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
              <OrderBox
                key={el.value}
                value={el.value}
                size={el.size}
                priceBox={el.priceBox}
                amount={el.amount}
                handlePlus={() => this.handlePlus(el)}
                handleMinus={() => this.handleMinus(el)}
              />
            );
          })}
          <div className="wrapPrice">
            <div className="priceBox">
              <div className="priceComment">총 상품금액</div>
              <div className="priceBox2">
                <div className="price">{priceBox.toLocaleString(2)}</div>
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

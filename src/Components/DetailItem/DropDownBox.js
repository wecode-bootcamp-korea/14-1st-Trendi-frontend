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
      heartChange: true,
      selectValue1: '',
      selectValue2: '',
    };
  }

  componentDidUpdate(prevprops, prevstate) {
    const { orderBox } = this.state;
    if (prevstate.orderBox !== this.state.orderBox) {
      const priceBox = orderBox.reduce((acc, prev) => {
        acc = acc + prev.priceBox * prev.amount;
        return acc;
      }, 0);
      this.setState({ priceBox });
    }
  }

  // 상품 클릭시 클릭 바뀌게
  handleChange = (e) => {
    const { number, selectValue1 } = this.state;
    this.setState({ selectValue1: e.value, number: number + 1, value: e.label });
    // console.log(this.state.selectValue);
  };

  //사이즈 클릭시 값이 누적되고 오더박스 카드가 생김,카드 종류별로 담아주는 기능 구현
  handleSizeCheck = (e) => {
    const { click2, selectPrice, item, value, orderBox, selectValue2 } = this.state;
    let arr = [...item];
    arr.push(selectPrice);
    //중복된 배열이 있을때 걸러주는 기능 추가
    let orderBox2 = [...orderBox];
    let orderBox3 = orderBox2.filter((el) => (el.value === value && el.size === e.label ? el : ''));
    if (orderBox3 == '') orderBox2.push({ idx: Date.now(), value, size: e.value, priceBox: 16200, amount: 1 });

    this.setState({
      value,
      click2: !click2,
      defaultPrice: selectPrice,
      item: arr,
      orderBox: orderBox2,
      selectValue2: e.value,
    });
  };

  handlePlus = (el) => {
    const { orderBox } = this.state;
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

  handleDelete = (el) => {
    const { orderBox } = this.state;
    let orderBoxFilter = orderBox.filter((orderBox) => {
      return el.idx !== orderBox.idx;
    });
    this.setState({ orderBox: orderBoxFilter });
  };

  handleHeartChange = () => {
    const { heartChange } = this.state;
    this.setState({ heartChange: !heartChange });
  };

  goToCart = (e) => {
    const { selectValue1, selectValue2 } = this.state;
    if (!selectValue1 && !selectValue2) {
      alert('[컬러]를 선택하세요.');
    }
    if (selectValue1 && !selectValue2) {
      alert('[사이즈]를 선택하세요.');
    }
    if (selectValue1 && selectValue2) {
      alert('www.trandi.co.kr 내용 : 선택하신 상품들이 정상적으로 장바구니에 담겼습니다. 지금 장바구니함으로 이동하시겠습니까?');
    }
  };

  render() {
    const { priceBox, number, orderBox, heartChange } = this.state;
    const heart = heartChange ? '/images/heart.png' : '/images/likeheart.png';
    return (
      <div className="DropDownBox">
        <form className="dropDownContainer">
          <Select className="select1" onChange={this.handleChange} options={COLLOR} defaultValue={COLLOR[0]} />
          {number > 0 && <Select className="select2" onChange={this.handleSizeCheck} options={SIZE} defaultValue={SIZE[0]} />}
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
                handleDelete={() => this.handleDelete(el)}
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
                <img className="naverLogo" src="/images/naver.png" alt="네이버 로고" />
              </div>
              <div className="pay">Pay 구매</div>
            </div>
            <div className="cartBox" onClick={this.goToCart}>
              <img className="cart" src="/images/cart.png" alt="카트" />
            </div>
            <div className="heartBox" onClick={this.handleHeartChange}>
              <img className="heart" src={heart} alt="하트" />
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

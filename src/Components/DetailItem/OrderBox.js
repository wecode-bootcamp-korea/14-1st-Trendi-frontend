import React, { Component } from 'react';
import './OrderBox.scss';

class OrderBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, size, priceBox, key, handlePlus, handleMinus, amount } = this.props;
    return (
      <div className="orderContainer" key={key}>
        <div className="orderWrap">
          <div className="orderBox">
            <div className="orderBox2">
              <div className="order">
                <div className="order1">{value}</div>
                <span className="order2">{size}</span>
                <div className="delivery">일반배송</div>
              </div>
              <div className="buttonBox">
                <button>X</button>
              </div>
            </div>
            <div className="orderBottomBox">
              <div className="orderBottom">
                <button className="minus" onClick={handleMinus}>
                  -
                </button>
                <div className="number">{amount}</div>
                <button className="plus" onClick={handlePlus}>
                  +
                </button>
              </div>
              <div className="orderPriceBox">
                <div className="orderPrice1">{(priceBox * amount).toLocaleString(2)}</div>
                <div className="orderPrice2">원</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderBox;

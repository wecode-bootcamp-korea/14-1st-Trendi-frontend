import React, { Component } from 'react';
import './OrderBox.scss';

class OrderBox extends Component {
  render() {
    const { value, size, priceBox, key } = this.props;
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
                <button className="minus">-</button>
                <div className="number">1</div>
                <button className="plus">+</button>
              </div>
              <div className="orderPriceBox">
                <div className="orderPrice1">{priceBox}</div>
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

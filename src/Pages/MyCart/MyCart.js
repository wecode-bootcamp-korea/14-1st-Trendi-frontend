import react, { Component } from "react";
import SelleProduct from "./SelleProduct";
import configData from "../../config.json";
import "./MyCart.scss";

class MyCart extends Component {
  constructor() {
    super();
    this.state = {
      myCartItem: {},
      paymentPrice: 0,
    };
  }
  componentDidMount() {
    fetch(configData.MOCK_DATA2)
      .then((res) => res.json())
      .then((res) => {
        let myCart = {};
        res.forEach((el) => {
          !myCart.hasOwnProperty(el.delivery) ? (myCart[el.delivery] = [el]) : (myCart[el.delivery] = [...myCart[el.delivery], el]);
        });
        this.setState({ myCartItem: myCart });
      });
  }
  render() {
    const { myCartItem } = this.state;
    let haruProducts = {};
    let nomalProducts = {};
    myCartItem &&
      myCartItem[0] &&
      myCartItem[0].forEach((el) =>
        !haruProducts.hasOwnProperty(el.seller)
          ? (haruProducts[el.seller] = [el])
          : (haruProducts[el.seller] = [...haruProducts[el.seller], el])
      );
    myCartItem &&
      myCartItem[1] &&
      myCartItem[1].forEach((el) =>
        !nomalProducts.hasOwnProperty(el.seller)
          ? (nomalProducts[el.seller] = [el])
          : (nomalProducts[el.seller] = [...nomalProducts[el.seller], el])
      );

    return (
      <div className="MyCart">
        <form>
          <h1>장바구니</h1>
          <div className="allSelectLayout">
            <div>
              <label>
                <input type="checkbox" />
                전체선택
              </label>
            </div>
            <div className="allDelete">전체삭제</div>
          </div>
          <div className="productsKind">
            asdf
            <SelleProduct Products={haruProducts} />
          </div>
        </form>
      </div>
    );
  }
}
export default MyCart;

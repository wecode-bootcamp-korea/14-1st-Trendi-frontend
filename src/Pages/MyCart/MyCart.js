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
    // const haruProduct = myCartItem[0].length && myCartItem[0].map(el=>)
    console.log(myCartItem);
    console.log(myCartItem);
    return (
      <div className="MyCart">
        <form>
          <h1>장바구니</h1>
          <div className="allSelectLayout">
            <div>
              <input type="checkbox" />
              <label>전체선택</label>
            </div>
            <div className="allDelete">전체삭제</div>
          </div>
          <div className="productsKind">
            <div className="kindHaru">
              <div>하루</div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default MyCart;

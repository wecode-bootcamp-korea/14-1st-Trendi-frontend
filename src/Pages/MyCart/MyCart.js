import react, { Component } from "react";
import SelleProduct from "./SelleProduct";
import configData from "../../config.json";
import "./MyCart.scss";

class MyCart extends Component {
  constructor() {
    super();
    this.state = {
      myCartData: {},
    };
  }
  componentDidMount() {
    fetch(configData.MOCK_DATA2)
      .then((res) => res.json())
      .then((res) => this.setState({ myCartData: res }));
  }
  render() {
    const { myCartData } = this.state;
    // let filterSellert = {};

    let filterSellert = {};

    // myCartData.forEach((el) => {
    //   !filterSellert.hasOwnProperty(el.delivery)
    //     ? (filterSellert[el.delivery] = [el])
    //     : (filterSellert[el.delivery] = [...filterSellert[el.delivery], el]);
    // });

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
          {/* <div className="productsKind">{myCartData && <SelleProduct filterSellert={filterSellert} />}</div> */}
        </form>
      </div>
    );
  }
}
export default MyCart;

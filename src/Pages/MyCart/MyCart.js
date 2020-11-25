import react, { Component } from "react";
import SelleProduct from "./SelleProduct";
import configData from "../../config.json";
import "./MyCart.scss";

class MyCart extends Component {
  constructor() {
    super();
    this.state = { allChekced: true };
  }
  componentDidMount() {
    fetch(configData.MOCK_DATA2)
      .then((res) => res.json())
      .then((res) => this.setState({ myCartData: res }));
  }

  changeQuantity = (e, product) => {
    const { value, dataset } = e.target;
    const myCartData = [];
    this.state.myCartData.forEach((el) => {
      if (el.orderList_id === product.orderList_id) {
        if (dataset.state === "+") {
          el.quantity = parseInt(el.quantity) + 1;
        } else if (dataset.state === "-") {
          el.quantity = parseInt(el.quantity) - 1;
        } else {
          el.quantity = value;
        }
      }

      myCartData.push(el);
    });
    this.setState({ myCartData });
  };

  checkProduct = (e, product) => {
    const { checked } = e.target;
    const { orderList_id, chekced } = product;

    const myCartData = [];
    let checkAllCheck = true;
    this.state.myCartData.forEach((el) => {
      el.orderList_id === product.orderList_id && (el.checked = !el.checked);
      el.checked != checkAllCheck && (checkAllCheck = false);
      myCartData.push(el);
    });
    this.setState({ myCartData, allChekced: checkAllCheck });
  };

  allCheckBtn = (e) => {
    const myCartData = [...this.state.myCartData];
    const targetState = e.target.checked;

    for (let i in myCartData) {
      myCartData[i].checked = targetState;
    }
    this.setState({ myCartData, allChekced: targetState });
  };

  allChlick = (e) => {
    this.setState({ myCartData: [], allChekced: false });
  };

  render() {
    const { myCartData, allChekced } = this.state;

    let filterDelivery = {};
    myCartData &&
      myCartData.forEach((el, index) => {
        !el.hasOwnProperty("checked") && (el["checked"] = true);
        !el.hasOwnProperty("orderList_id") && (el["orderList_id"] = index); //추후 삭제

        !filterDelivery.hasOwnProperty(el.delivery)
          ? (filterDelivery[el.delivery] = [el])
          : (filterDelivery[el.delivery] = [...filterDelivery[el.delivery], el]);
      });

    const totalPrice =
      myCartData &&
      myCartData
        .reduce((acc, cur) => {
          let sum = cur.checked ? acc + cur.price * cur.quantity : acc;
          return sum;
        }, 0)
        .toLocaleString();

    return (
      <div className="MyCart">
        <form>
          <h1>장바구니</h1>
          <div className="allSelectLayout">
            <label>
              <input className="allChekbox" type="checkbox" checked={allChekced} onChange={this.allCheckBtn} />
              전체선택
            </label>
            <div className="allDelete" onClick={this.allChlick}>
              전체삭제
            </div>
          </div>
          <div className="productsList">
            {myCartData &&
              Object.keys(filterDelivery).map((el, index) => (
                <div key={index}>
                  <div className="deliveryKind">
                    {!index && <img src="images/delivery.png" alt="하루빠른배송이미지" />}
                    <span className={`${!index && "haruDelivery"}`}>{el}</span>
                  </div>
                  <SelleProduct
                    products={filterDelivery[el]}
                    changeQuantity={this.changeQuantity}
                    checkProduct={this.checkProduct}
                  />
                </div>
              ))}
          </div>
          <div className="AmountForm">
            <div className="formTitle">총 결제 예상 금액</div>
            <div className="EstimatedAmount">
              <span>
                {`총 상품 금액  ${totalPrice}
                  원 
                + 총 배송비 0원`}
              </span>

              <label>
                총 결제예상 금액 <span className="orderPrice">{totalPrice}</span> 원
              </label>
            </div>
            <input type="button" value="구매하기" />
          </div>
        </form>
      </div>
    );
  }
}
export default MyCart;

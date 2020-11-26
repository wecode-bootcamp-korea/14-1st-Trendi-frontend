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
    fetch(configData.MYCART, {
      headers: {
        Authorization: localStorage.getItem("key"),
      },
    })
      .then((res) => res.json())
      .then((res) => this.setState({ myCartData: res.data }));
  }

  changeQuantity = (e, product) => {
    const { value, dataset } = e.target;
    const myCartData = [];
    this.state.myCartData.forEach((el) => {
      if (el.orderlist_id === product.orderlist_id) {
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
    const { orderlist_id, chekced } = product;

    const myCartData = [];
    let checkAllCheck = true;
    this.state.myCartData.forEach((el) => {
      el.orderlist_id === product.orderlist_id && (el.checked = !el.checked);
      el.checked !== checkAllCheck && (checkAllCheck = false);
      myCartData.push(el);
    });
    this.setState({ myCartData, allChekced: checkAllCheck });
  };

  allCheckBtn = (e) => {
    const myCartData = [...this.state.myCartData];
    const { checked } = e.target;

    for (let i in myCartData) {
      myCartData[i].checked = targetState;
    }
    this.setState({ myCartData, allChekced: checked });
  };

  allChlick = (e) => {
    this.setState({ myCartData: [], allChekced: false });
  };

  deleteProduct = (products) => {
    const { myCartData } = this.state;
    products.forEach((product) =>
      fetch(`${configData.MYCART}/${product.orderlist_id}`, {
        method: "delete",
        headers: {
          Authorization: localStorage.getItem("key"),
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (products.length < 2) {
            const products =
              res.message === "SUCCESS" && myCartData.filter((el) => el.orderlist_id !== product.orderlist_id && el);
            this.setState({ myCartData: products });
          } else {
            this.setState({ myCartData: [] });
          }
        })
    );
  };

  render() {
    const { myCartData, allChekced } = this.state;
    let filterDelivery = {};
    myCartData &&
      myCartData.forEach((el, index) => {
        !el.hasOwnProperty("checked") && (el["checked"] = true);
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
            <div className="allDelete" onClick={() => this.deleteProduct(myCartData)}>
              전체삭제
            </div>
          </div>
          <div className="productsList">
            {myCartData &&
              Object.keys(filterDelivery).map((el, index) => (
                <div key={index}>
                  <div className="deliveryKind">
                    {!index && <img src="images/delivery.png" alt="하루빠른배송이미지" />}
                    <span className={`${!index && "haruDelivery"}`}>{el === "0" ? "하루배송" : "일반배송"}</span>
                  </div>
                  <SelleProduct
                    products={filterDelivery[el]}
                    changeQuantity={this.changeQuantity}
                    checkProduct={this.checkProduct}
                    deleteProduct={this.deleteProduct}
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

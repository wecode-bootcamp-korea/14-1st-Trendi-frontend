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

  changeQuantity = (e, isData) => {
    const myCartData = this.state.myCartData;
    console.log(myCartData);
    // console.log(e.target.dataset);
    // console.log(isData);

    // this.setState({ myCartData });
  };

  allCheckBtn = (e) => {
    const myCartData = [...this.state.myCartData];
    const targetState = e.target.checked;
    for (let i in myCartData) {
      myCartData[i].checked = targetState;
    }
    console.log(myCartData);
    this.setState({ myCartData, allChekced: targetState });
  };
  render() {
    const { myCartData, allChekced } = this.state;
    const totalPrice =
      myCartData &&
      myCartData
        .reduce((acc, cur) => {
          return acc + cur.price;
        }, 0)
        .toLocaleString();

    let filterDelivery = {};
    myCartData &&
      myCartData.forEach((el, index) => {
        !el.hasOwnProperty("checked") && (el["checked"] = true);
        !filterDelivery.hasOwnProperty(el.delivery)
          ? (filterDelivery[el.delivery] = [el])
          : (filterDelivery[el.delivery] = [...filterDelivery[el.delivery], el]);
      });

    return (
      <div className="MyCart">
        <form>
          <h1>장바구니</h1>
          <div className="allSelectLayout">
            <label>
              <input className="allChekbox" type="checkbox" checked={allChekced} onChange={this.allCheckBtn} />
              전체선택
            </label>
            <div className="allDelete">전체삭제</div>
          </div>
          <div className="productsList">
            {myCartData &&
              Object.keys(filterDelivery).map((el, index) => (
                <>
                  <div className="deliveryKind" key={index}>
                    {!index && <img src="images/delivery.png" alt="하루빠른배송이미지" />}
                    <span className={`${!index && "haruDelivery"}`}>{el}</span>
                  </div>
                  <SelleProduct products={filterDelivery[el]} key={index} changeQuantity={this.changeQuantity} />
                </>
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
            <input value="구매하기" />
          </div>
        </form>
      </div>
    );
  }
}
export default MyCart;

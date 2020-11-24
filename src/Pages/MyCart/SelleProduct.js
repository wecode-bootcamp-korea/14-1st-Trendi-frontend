import react, { Component } from "react";
import "./SellerProduct.scss";
class SellerProduct extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { Products } = this.props;

    let haruProducts = {};
    viewData &&
      Object.keys(viewData).map((deliveryKey) =>
        viewData[deliveryKey].forEach((el) =>
          !haruProducts.hasOwnProperty(el.seller)
            ? (haruProducts[el.seller] = [el])
            : (haruProducts[el.seller] = [...haruProducts[el.seller], el])
        )
      );

    return (
      <div className="SellerProduct">
        <table>
          <colgroup>
            <col width={500} />
            <col width={200} />
            <col width={100} />
          </colgroup>
          {Object.keys(Products).map((keyValue) => (
            <>
              <thead>
                <tr>
                  <td>{keyValue}</td>
                  <td>수량</td>
                  <td>주문금액</td>
                </tr>
              </thead>
              <tbody>
                {Products[keyValue].map((value, index) => (
                  <tr>
                    <td className="flexAlign">
                      <input type="checkbox" />
                      <img src={value.thumb_image_url} />
                      <div>
                        <label>{value.title}</label>
                        <span></span>
                      </div>
                    </td>
                    <td>{value.delivery}</td>
                    <td>
                      <span>{value.price}원</span>
                      <div>바로주문</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          ))}
        </table>
        <div>하루배송 상품 추가하기</div>
      </div>
    );
  }
}
export default SellerProduct;

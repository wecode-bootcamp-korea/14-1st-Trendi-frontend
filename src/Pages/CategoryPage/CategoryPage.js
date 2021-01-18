import React, { Component } from 'react';
import ItemCategory from './ItemCategory';
import ShirtList from './ShirtList';
import configData from '../../config.json';
import './CategoryPage.scss';

const API = 'http://192.168.200.156:8002/products?delivery=1&sale=1&ordering=h-price';

class CategoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      delivery: false,
      sale: false,
      newestValue: 0,
      reviewValue: 0,
      underPriceValue: 0,
    };
  }

  componentDidMount() {
    fetch(`${configData.ITEMLIST_URL}?category=2&delivery=1&ordering=review`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.product_list }));
  }

  getDelivery = () => {
    const { delivery, newestValue, reviewValue, underPriceValue } = this.state;
    let sendDelivery = delivery ? 'delivery=1' : 'trendi-pick=1';
    let sendNewsValue = newestValue === 10 ? '&sale=true' : '';
    let sendReviewValue = reviewValue === 10 ? '&sale=true' : '';
    let sendUnderPriceValue = underPriceValue === 10 ? '&sale=true' : '';
    fetch(`${configData.HARU_URL}?${sendDelivery}`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.product_list }));
  };
  getDelivery2 = () => {
    const { delivery, newestValue, reviewValue, underPriceValue } = this.state;
    let sendDelivery = '?trendi-pick=1';
    let sendNewsValue = newestValue === 10 ? '?ordering=latest' : '';
    let sendReviewValue = reviewValue === 10 ? '&sale=true' : '';
    let sendUnderPriceValue = underPriceValue === 10 ? '&sale=true' : '';
    fetch(
      `${configData.HARU_URL}${sendDelivery}${sendReviewValue}${sendNewsValue}${sendUnderPriceValue}`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.product_list }));
  };

  getSale = () => {
    const { sale, newestValue, reviewValue, underPriceValue } = this.state;
    let sendSale = sale ? '?sale=1' : '';
    let sendNewsValue = newestValue === 10 ? '?ordering=latest' : '';
    let sendReviewValue = reviewValue === 10 ? '&sale=true' : '';
    let sendUnderPriceValue = underPriceValue === 10 ? '&sale=true' : '';
    fetch(
      `${configData.HARU_URL}${sendSale}${sendReviewValue}${sendNewsValue}${sendUnderPriceValue}`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.product_list }));
  };

  getDeliverySale = () => {
    const { sale, delivery, newestValue, reviewValue, underPriceValue } = this.state;
    let sendDeliverySale = '?delivery=1&sale=1';
    let sendNewsValue = newestValue === 10 ? '?ordering=latest' : '';
    let sendReviewValue = reviewValue === 10 ? '&sale=true' : '';
    let sendUnderPriceValue = underPriceValue === 10 ? '&sale=true' : '';
    fetch(
      `${configData.HARU_URL}${sendDeliverySale}${sendReviewValue}${sendNewsValue}${sendUnderPriceValue}`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.product_list }));
  };
  getNewestValue = () => {
    const { newestValue, delivery, sale } = this.state;
    let sendDelivery = delivery ? 'delivery=1' : '';
    let sendSale = sale ? 'sale=1' : '';
    let sendValue = newestValue === 10 ? 'ordering=latest' : '';
    fetch(`${configData.HARU_URL}?${sendDelivery}${sendSale}${sendValue}`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.product_list }));
  };

  getReviewValue = () => {
    const { reviewValue, delivery, sale } = this.state;
    let sendDelivery = delivery ? '&delivery=true' : '';
    let sendSale = sale ? '&sale=true' : '';
    let sendValue = reviewValue === 10 ? '?ordering=h-price' : '';
    fetch(`${configData.HARU_URL}${sendValue}${sendDelivery}${sendSale}`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.product_list }));
  };

  getUnderPriceValue = () => {
    const { underPriceValue, delivery, sale } = this.state;
    let sendDelivery = delivery ? '&delivery=true' : '';
    let sendSale = sale ? '&sale=true' : '';
    let sendValue = underPriceValue === 10 ? '?ordering=l-price' : '';
    fetch(`${configData.HARU_URL}${sendValue}${sendDelivery}${sendSale}`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.product_list }));
  };

  componentDidUpdate(prevprops, prevstate) {
    let { delivery, sale, newestValue, reviewValue, underPriceValue } = this.state;
    if (prevstate.delivery !== delivery || prevstate.sale !== sale) {
      if (delivery) {
        if (sale === true) {
          this.getDeliverySale();
        } else if (sale === false) {
          this.getDelivery();
        }
      } else {
        if (sale === true) {
          this.getSale();
        } else {
          this.getDelivery2();
        }
      }
    }

    if (prevstate.newestValue !== newestValue && newestValue === 10) {
      this.getNewestValue();
    }
    if (prevstate.reviewValue !== reviewValue && reviewValue === 10) {
      this.getReviewValue();
    }
    if (prevstate.underPriceValue !== underPriceValue && underPriceValue === 10) {
      this.getUnderPriceValue();
    }
  }
  handleDeliveryFilter = (e) => {
    const { delivery } = this.state;
    this.setState({ delivery: !delivery });
  };

  handleSaleFilter = (e) => {
    const { sale } = this.state;
    this.setState({ sale: !sale });
  };

  onChangeNewestValue = (e) => {
    this.setState({ newestValue: 10, reviewValue: 0, underPriceValue: 0 });
  };

  onChangeReviewValue = (e) => {
    this.setState({ newestValue: 0, reviewValue: 10, underPriceValue: 0 });
  };
  onChangeUnderPriceValue = (e) => {
    this.setState({ newestValue: 0, reviewValue: 0, underPriceValue: 10 });
  };

  render() {
    const { data, saleValue, newestValue, reviewValue, underPriceValue } = this.state;
    return (
      <div className="SideItemList">
        <nav className="nav">
          <div className="blankSpaceBox">
            <div className="navComment">
              <div className="commentBox">
                <div className="comment">쇼핑몰 ∙ 마켓</div>
                <div className="comment">></div>
                <div className="comment">카테고리</div>
                <div className="comment">></div>
                <div className="comment">상의</div>
                <div className="comment">></div>
                <div className="comment">전체</div>
              </div>
            </div>
          </div>
        </nav>
        <div className="ItemList">
          <div className="ItemCategory">
            <ItemCategory
              handleDeliveryFilter={this.handleDeliveryFilter}
              handleSaleFilter={this.handleSaleFilter}
            />
          </div>
          <div className="ShirtList">
            <ShirtList
              data={data}
              id={data.product_pk}
              onChangeSaleValue={this.onChangeSaleValue}
              onChangeNewestValue={this.onChangeNewestValue}
              onChangeUnderPriceValue={this.onChangeUnderPriceValue}
              onChangeReviewValue={this.onChangeReviewValue}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryPage;

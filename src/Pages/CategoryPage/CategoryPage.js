import React, { Component } from 'react';
import ItemCategory from './ItemCategory';
import ShirtList from './ShirtList';
import configData from '../../config.json';
import './CategoryPage.scss';

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

  //목데이터
  // componentDidMount() {
  //   fetch('/data/MOCK_DATA.json')
  //     .then((res) => res.json())
  //     .then((res) => this.setState({ data: res }));
  // }

  //원두님꺼 데이터
  componentDidMount() {
    fetch(`${configData.MAIN_URL}/products?category=2`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.product_list }));
  }

  //(1)백엔드로 '하루 배송' 리퀘스트 보내는 행위
  getDelivery = () => {
    const { delivery, newestValue, reviewValue, underPriceValue } = this.state;
    let sendDelivery = delivery ? 'delivery=true' : '';
    let sendNewsValue = newestValue === 10 ? '&sale=true' : '';
    let sendReviewValue = reviewValue === 10 ? '&sale=true' : '';
    let sendUnderPriceValue = underPriceValue === 10 ? '&sale=true' : '';
    fetch(`${configData.MAIN_URL}${sendDelivery}${sendReviewValue}${sendNewsValue}${sendUnderPriceValue}`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.product_list }));
    console.log('하루 배송 받은 후 data : ', this.state.data);
  };

  //(2)백엔드로 '세일' 리퀘스트 보내는 행위
  getSale = () => {
    const { sale, newestValue, reviewValue, underPriceValue } = this.state;
    let sendSale = sale ? 'sale=true' : '';
    let sendNewsValue = newestValue === 10 ? '&sale=true' : '';
    let sendReviewValue = reviewValue === 10 ? '&sale=true' : '';
    let sendUnderPriceValue = underPriceValue === 10 ? '&sale=true' : '';
    fetch(`${configData.MAIN_URL}${sendSale}${sendReviewValue}${sendNewsValue}${sendUnderPriceValue}`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.product_list }));
    console.log('세일 받은 후 data : ', this.state.data);
  };

  //(3)백엔드로 '하루배송, 세일' 리퀘스트 보내는 행위
  getDeliverySale = () => {
    const { sale, delivery, newestValue, reviewValue, underPriceValue } = this.state;
    let sendDeliverySale = sale === true && delivery === true ? 'delivery=true&sale=true' : '';
    let sendNewsValue = newestValue === 10 ? '&sale=true' : '';
    let sendReviewValue = reviewValue === 10 ? '&sale=true' : '';
    let sendUnderPriceValue = underPriceValue === 10 ? '&sale=true' : '';
    fetch(`${configData.MAIN_URL}${sendDeliverySale}${sendReviewValue}${sendNewsValue}${sendUnderPriceValue}`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.product_list }));
    console.log('하루배송,세일 받은 후 data : ', this.state.data);
  };

  //(1-1)백엔드로 최신순 리퀘스트 보내는 행위 //이거 원두님이랑 이야기해서 쿼리 쪽 수정해야해
  getNewestValue = () => {
    const { newestValue, delivery, sale } = this.state;
    let sendDelivery = delivery ? '&delivery=true' : '';
    let sendSale = sale ? '&sale=true' : '';
    let sendValue = newestValue === 10 ? 'sale=true' : '';
    fetch(`${configData.MAIN_URL}${sendValue}${sendDelivery}${sendSale}`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.product_list }));
    console.log('최신순 data : ', this.state.data);
  };
  //(1-2)백엔드로 리뷰 많은순 리퀘스트 보내는 행위 //이거 원두님이랑 이야기해서 쿼리 쪽 수정해야해
  getReviewValue = () => {
    const { reviewValue, delivery, sale } = this.state;
    let sendDelivery = delivery ? '&delivery=true' : '';
    let sendSale = sale ? '&sale=true' : '';
    let sendValue = reviewValue === 10 ? 'sale=true' : '';
    fetch(`${configData.MAIN_URL}${sendValue}${sendDelivery}${sendSale}`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.product_list }));
    console.log('리뷰 많은순 data : ', this.state.data);
  };

  //(1-3)백엔드로 낮은 가격순 리퀘스트 보내는 행위 //이거 원두님이랑 이야기해서 쿼리 쪽 수정해야해
  getUnderPriceValue = () => {
    const { underPriceValue, delivery, sale } = this.state;
    let sendDelivery = delivery ? '&delivery=true' : '';
    let sendSale = sale ? '&sale=true' : '';
    let sendValue = underPriceValue === 10 ? 'sale=true' : '';
    fetch(`${configData.MAIN_URL}${sendValue}${sendDelivery}${sendSale}`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.product_list }));
    console.log('리뷰 많은순 data : ', this.state.data);
  };

  //@@@@@@@@@하루배송,세일,판매량 순 눌렀을때 컨디업@@@@@@@@@@@@@@@@
  componentDidUpdate(prevprops, prevstate) {
    // console.log('@@@@하루배송@@@@ : ', this.state.delivery);
    // console.log('****세일**** : ', this.state.sale);
    let { delivery, sale, newestValue, reviewValue, underPriceValue } = this.state;
    if (delivery === true) {
      if (sale === true) {
        console.log('(3)하루배송&세일 실행');
        this.getDeliverySale();
      } else if (sale === false) {
        console.log('(1)하루배송 실행');
        this.getDelivery();
      }
    } else if (sale === true) {
      console.log('(2)세일 실행');
      this.getSale();
    }

    if (prevstate.newestValue !== newestValue && newestValue === 10) {
      console.log('(1)최신순 실행');
      this.getNewestValue();
    }
    if (prevstate.reviewValue !== reviewValue && reviewValue === 10) {
      console.log('(2)리뷰 실행');
      this.getReviewValue();
    }
    if (prevstate.underPriceValue !== underPriceValue && underPriceValue === 10) {
      console.log('(3)낮은가격 실행');
      this.getUnderPriceValue();
    }
  }
  //체크 박스 눌렀을때 delivery 변화
  handleDeliveryFilter = (e) => {
    const { delivery } = this.state;
    this.setState({ delivery: !delivery });
  };

  //세일 버튼 필터 기능 추가
  handleSaleFilter = (e) => {
    const { sale } = this.state;
    this.setState({ sale: !sale });
  };

  onChangeSaleValue = (e) => {
    console.log('클릭1');
    // this.setState({ newestValue: 0, reviewValue: 0, underPriceValue: 0 });
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
    // console.log('saleValue : ', saleValue);
    // console.log('newestValue : ', newestValue);
    // console.log('reviewValue : ', reviewValue);
    // console.log('underPriceValue : ', underPriceValue);
    // console.log('=======');
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
            <ItemCategory handleDeliveryFilter={this.handleDeliveryFilter} handleSaleFilter={this.handleSaleFilter} />
          </div>
          <div className="ShirtList">
            <ShirtList
              data={data}
              id={data.product_pk}
              saleValue={saleValue}
              newestValue={newestValue}
              reviewValue={reviewValue}
              underPriceValue={underPriceValue}
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

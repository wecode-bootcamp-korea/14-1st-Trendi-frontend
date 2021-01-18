import React, { useEffect, useState } from 'react';
import ItemCategory from './ItemCategory';
import ShirtList from './ShirtList';
import configData from '../../config.json';
import './CategoryPage.scss';
import axios from 'axios';

const API = 'http://192.168.200.156:8002/products?delivery=1&sale=1&ordering=h-price';

const HksCategoryPage = () => {
  const [data, setData] = useState([]);
  const [delivery, setDelivery] = useState(false);
  const [sale, setSale] = useState(false);
  const [newestValue, setNewestValue] = useState(0);
  const [reviewValue, setReviewValue] = useState(0);
  const [underPriceValue, setUnderPriceValue] = useState(0);

  const responseItem = async () => {
    const response = await axios.get(
      `${configData.ITEMLIST_URL}?category=2&delivery=1&ordering=review`
    );
    setData(response.data.product_list);
  };

  useEffect(() => {
    responseItem();
  }, []);

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
};

export default HksCategoryPage;

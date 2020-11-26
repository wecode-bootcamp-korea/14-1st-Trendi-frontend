import React, { Component } from 'react';
import { CATEGORY } from './CATEGORY';
import { withRouter } from 'react-router-dom';
import './ItemCategory.scss';

class ItemCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      click2: false,
      imgChange: true,
      harucheck: true,
      delivery: false,
    };
  }

  upDown = () => {
    const { click } = this.state;
    this.setState({ click: !click });
  };

  goToDetailPage = () => {
    this.props.history.push('/detailpage');
  };

  render() {
    const { click } = this.state;
    const { handleSaleFilter, handleDeliveryFilter } = this.props;
    const upDownImg = click ? '../../../images/up.png' : '../../../images/down.png';
    return (
      <div className="ItemCategory">
        <nav className="nav">
          <div className="navBox">
            <div className="mainCategory">
              <div className="categoryTitle">상품옵션</div>
              <div className="categoryList">
                <input type="checkbox" onChange={handleDeliveryFilter} />
                <img src="/images/haru2.png" alt="하루배송 사진" />
              </div>
              <div className="categoryList">
                <input type="checkbox" onChange={handleSaleFilter} />
                <span>세일</span>
              </div>
            </div>
          </div>
          <div className="categoryBox">
            <div className="category">CATEGORY</div>
            <div className="categoryList">전체</div>
            <div className="categoryOuterBox">
              <div className="categoryListSub">아우터</div>
              <div>
                <img className="arrow" src="/images/down.png" alt="down" />
              </div>
            </div>
            <div className="categoryOuterBox" onClick={() => this.setState({ click: !click })}>
              <div className="categoryListSub">상의</div>
              <div>
                <img className="arrow" src={upDownImg} alt="down" />
              </div>
            </div>
            {this.state.click && (
              <div className="categoryListBox">
                <div className="list1">전체</div>
                <div className="list2" onClick={this.goToDetailPage}>
                  티셔츠
                </div>
                <div className="list3"></div>
              </div>
            )}
            {CATEGORY.map((category, i) => {
              return (
                <div className="categoryListMap" key={category.i}>
                  <div className="categoryListSub">{category.item}</div>
                  <div className="arrowBox">
                    <img className="arrow" src="/images/down.png" alt="down" />
                  </div>
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(ItemCategory);

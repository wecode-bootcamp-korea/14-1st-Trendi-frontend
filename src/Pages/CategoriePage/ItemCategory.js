import React, { Component } from 'react';
import './ItemCategory.scss';
import ShirtList from './ShirtList';

class ItemCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      imgChange: true,
      harucheck: true,
    };
  }

  handleCheck = (e) => {
    const { harucheck } = this.state;
    this.setState({ harucheck: !harucheck });
  };

  upDown = () => {
    const { click } = this.state;
    this.setState({ click: !click });
  };

  render() {
    const { click } = this.state;
    const upDownImg = click ? '../../../images/up.png' : '../../../images/down.png';
    return (
      <div className="ItemCategory">
        <nav className="nav">
          <div className="navBox">
            <div className="mainCategory">
              <div className="categoryTitle">상품옵션</div>
              <div className="categoryList">
                <input type="checkbox" onChange={this.handleCheck} />
                <img src="./images/haru2.png" alt="하루배송 사진" />
              </div>
              <div className="categoryList">
                <input type="checkbox" />
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
                <img className="arrow" src="./images/down.png" alt="down" />
              </div>
            </div>
            <div className="categoryOuterBox" onClick={() => this.upDown()}>
              <div className="categoryListSub">상의</div>
              <div>
                <img className="arrow" src={upDownImg} alt="down" />
              </div>
            </div>
            {this.state.click && (
              <div className="categoryListBox">
                <div className="list1">전체</div>
                <div className="list2">티셔츠</div>
                <div className="list3"></div>
              </div>
            )}
            {CATEGORY.map((category) => {
              return (
                <div className="categoryListMap">
                  <div className="categoryListSub">{category.item}</div>
                  <div className="arrowBox">
                    <img className="arrow" src="./images/down.png" alt="down" />
                  </div>
                </div>
              );
            })}
          </div>
        </nav>
        {/* <ShirtList API2={this.props.API2} /> */}
      </div>
    );
  }
}

export default ItemCategory;

const CATEGORY = [
  { id: 1, item: '바지' },
  { id: 2, item: '원피스' },
  { id: 3, item: '스커트' },
  { id: 4, item: '신발' },
  { id: 5, item: '가방' },
  { id: 6, item: '주얼리' },
  { id: 7, item: '잡화' },
];

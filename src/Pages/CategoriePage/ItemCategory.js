import React, { Component } from 'react';
import './ItemCategory.scss';
import ShirtList from './ShirtList';

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

  // componentDidUpdate(prevprops, prevstate) {
  //   const { orderBox } = this.state;
  //   if (prevstate.orderBox !== this.state.orderBox) {
  //     const priceBox = orderBox.reduce((acc, prev) => {
  //       acc = acc + prev.priceBox * prev.amount;
  //       return acc;
  //     }, 0);
  //     this.setState({ priceBox });
  //   }
  // }

  // getData = () => {
  //   const{delivery} =this.state;
  //   fetch(`https://블라블라/delivery=${delivery}`)
  //     .then((res) => res.json())
  //     .then((result) => this.setState({ data: result }));
  // };

  // componentDidUpdate(prevprops, prevstate) {
  //   console.log('delivery : ', this.state.delivery);
  //   let { delivery, click2 } = this.state;
  //   if (prevstate.click2 !== click2) {
  //     delivery = !delivery;
  //     this.setState({ delivery });
  //   }
  // }

  // handleChange = (e) => {
  //   const { click2 } = this.state;
  //   this.setState({ click2: !click2 });
  // };

  upDown = () => {
    const { click } = this.state;
    this.setState({ click: !click });
  };

  render() {
    const { click } = this.state;
    const { handleItemFilter, handleSaleFilter, handleChange } = this.props;
    const upDownImg = click ? '../../../images/up.png' : '../../../images/down.png';
    return (
      <div className="ItemCategory">
        <nav className="nav">
          <div className="navBox">
            <div className="mainCategory">
              <div className="categoryTitle">상품옵션</div>
              <div className="categoryList">
                <input
                  type="checkbox"
                  onChange={handleChange}
                  // onChange={handleItemFilter}
                />
                <img src="./images/haru2.png" alt="하루배송 사진" />
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

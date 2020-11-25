import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import ItemCategory from './ItemCategory';
import ShirtList from './ShirtList';
import configData from '../../config.json';
import './CategoriePage.scss';

class CategoriePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      filterItem: [],
      haruFilter: false,
      sale: false,
      saleItem: [],
      delivery: false,
    };
  }

  //목데이터
  // componentDidMount() {
  //   // console.log(`${configData.MAIN_URL}`);
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

  //백엔드로 리퀘스트 보내는 행위
  getData = () => {
    let delivery2 = this.state.delivery ? 'delivery=true' : '';
    // const { delivery } = this.state;
    fetch(`${configData.MAIN_URL}${delivery2}`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.product_list }));
    console.log('받은 후 data : ', this.state.data);
  };
  //체크 박스 눌렀을때 컨디업
  componentDidUpdate(prevprops, prevstate) {
    console.log('delivery : ', this.state.delivery);
    let { delivery } = this.state;
    if (prevstate.delivery !== delivery) {
      this.getData();
    }
  }
  //체크 박스 눌렀을때 delivery 변화
  handleChange = (e) => {
    const { delivery } = this.state;
    this.setState({ delivery: !delivery });
  };

  //하루 배송 필터 기능 추가
  handleItemFilter = (e) => {
    // const { data, haruFilter } = this.state;
    // let itemFilter;
    // if (haruFilter) {
    //   itemFilter = [];
    // } else {
    //   itemFilter = data.filter((item) => {
    //     return item.delivery;
    //   });
    // }
    // this.setState({ filterItem: itemFilter, haruFilter: !haruFilter });
    // console.log('filterItem : ', this.state.filterItem);

    fetch(`?delivery=${!this.state.delivery}`) //이 주소로 요청 한다.(딜리버리가 트루인것만 보여줘)
      .then((res) => res.json())
      .then((res) => this.setState({ filterItem: res.product_list }));
    // fetch(productDetail_API + this.props.match.params.id)
  };

  //세일 버튼 필터 기능 추가
  handleSaleFilter = (e) => {
    const { data, sale } = this.state;
    let saleFilter;
    if (sale) {
      saleFilter = [];
    }
    if (!sale) {
      saleFilter = data.filter((saleItem) => {
        return saleItem.is_sale;
      });
    }
    this.setState({ saleItem: saleFilter, sale: !sale });
  };

  render() {
    console.log('받기 전 data : ', this.state.data);
    const { data, filterItem, saleItem } = this.state;
    return (
      <div className="SideItemList">
        <Nav />
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
            <ItemCategory handleChange={this.handleChange} handleItemFilter={this.handleItemFilter} handleSaleFilter={this.handleSaleFilter} />
          </div>
          <div className="ShirtList">
            <ShirtList data={data} id={data.product_pk} />
            {/* {filterItem.length && data ? <ShirtList data={filterItem} /> : <ShirtList data={data} />} */}
            {/* {saleItem.length && data ? <ShirtList data={saleItem} /> : <ShirtList data={data} />} */}
          </div>
        </div>
      </div>
    );
  }
}

export default CategoriePage;

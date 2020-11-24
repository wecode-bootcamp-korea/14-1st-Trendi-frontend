import React, { Component } from 'react';
import './ShoppingNav.scss';
import { withRouter } from 'react-router-dom';

class ShoppingNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
    };
  }

  handleChangePage = () => {
    const { click } = this.state;
    if (!click) {
      this.props.history.push('/test');
    }
  };

  render() {
    const { handleEnter, handleLeave } = this.props;
    return (
      <div className="shoppingContainerBox" onMouseLeave={handleLeave} onMouseEnter={handleEnter}>
        <div className="noneBox1">
          {SHOPPING_LIST.map((el) => {
            return (
              <div className="shoppingContainer" key={el.idx}>
                <div className="mainTitle" onClick={this.handleChangePage}>
                  {el.main}
                </div>
                <div className="content">{el.item1}</div>
                <div className="content">{el.item2}</div>
                <div className="content">{el.item3}</div>
                <div className="content">{el.item4}</div>
                <div className="content">{el.item5}</div>
                <div className="content">{el.item6}</div>
                <div className="content">{el.item7}</div>
                <div className="mainTitle">{el.main2}</div>
                <div className="content">{el.item8}</div>
                <div className="content">{el.item9}</div>
                <div className="content">{el.item10}</div>
                <div className="content">{el.item11}</div>
                <div className="content">{el.item12}</div>
                <div className="content">{el.item13}</div>
                <div className="content">{el.item14}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(ShoppingNav);

const SHOPPING_LIST = [
  {
    id: 1,
    main: '아우터',
    item1: '자켓',
    item2: '가디건',
    item3: '코트',
    item4: '점퍼',
    item5: '패딩',
    item6: '무스탕/퍼',
    item7: '기타',
    main2: '가방',
    item8: '크로스백',
    item9: '토트백',
    item10: '숄더백',
    item11: '에코백',
    item12: '클러치',
    item13: '백팩',
  },
  {
    id: 2,
    main: '상의',
    item1: '티셔츠',
    item2: '셔츠/블라우스',
    item3: '니트',
    item4: '후드/맨투맨',
    item5: '베스트',
    main2: '주얼리',
    item6: '귀걸이',
    item7: '목걸이',
    item8: '팔찌/발찌',
    item9: '반지',
  },
  {
    id: 3,
    main: '바지',
    item1: '청바지',
    item2: '슬랙스',
    item3: '면바지',
    item4: '반바지',
    item5: '트레이닝/조거',
    item6: '레깅스',
    main2: '잡화',
    item7: '휴대폰acc',
    item8: '헤어acc',
    item9: '양말/스타킹',
    item10: '지갑/파우치',
    item11: '모자',
    item12: '벨트',
    item13: '시계',
  },
  {
    id: 4,
    main: '원피스',
    item1: '미니',
    item2: '미디',
    item3: '롱',
    item4: '투피스',
    item5: '점프수트',
    main2: '라이프웨어',
    item6: '언더웨어',
    item7: '홈웨어',
    item8: '스윔웨어',
    item9: '비치웨어',
    item10: '기타',
  },
  {
    id: 5,
    main: '스커트',
    item1: '미니',
    item2: '미디',
    item3: '롱',
    main2: '빅사이즈',
    item4: '아우터',
    item5: '상의',
    item6: '바지',
    item7: '원피스',
    item8: '스커트',
  },
  {
    id: 6,
    main: '신발',
    item1: '플랫/로퍼',
    item2: '샌들/슬리퍼',
    item3: '힐',
    item4: '스니커즈',
    item5: '부츠/워커',
  },
];

import React, { Component } from 'react';
import './ItemInfomationBar.scss';
import { Route, Link } from 'react-router-dom';

class ItemInfomationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHiddenSubs: false,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = (e) => {
    const { showHiddenSubs } = this.state;
    const scrollTop = e.srcElement.scrollingElement.scrollTop;
    if (scrollTop > 0 && scrollTop <= 3656 && showHiddenSubs) this.setState({ showHiddenSubs: false });
    if (scrollTop > 3656 && !showHiddenSubs) this.setState({ showHiddenSubs: true });
  };

  render() {
    const changeColor = this.state.showHiddenSubs ? 'defaultColor' : 'blackColor';
    const changeColor2 = this.state.showHiddenSubs ? 'blackColor' : 'defaultColor';

    return (
      <div className="ItemInfomationBar" onScroll={this.handleScroll}>
        <div className="wrap">
          <ul className="reviewBar">
            <li className="itemInfomation1">
              <Link className={changeColor} to="/main">
                상 품 정 보
              </Link>
            </li>
            <li className="itemInfomation2">
              <Link className={changeColor2} to="/">
                리 뷰
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ItemInfomationBar;

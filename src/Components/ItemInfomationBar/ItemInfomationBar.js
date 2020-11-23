import React, { Component } from 'react';
import './ItemInfomationBar.scss';
import { Route, Link } from 'react-router-dom';

class ItemInfomationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHiddenSubs: true,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = (e) => {
    if (e.srcElement.scrollingElement.scrollTop > 0) this.setState({ showHiddenSubs: false });
    if (e.srcElement.scrollingElement.scrollTop <= 3656) this.setState({ showHiddenSubs: true });
  };

  render() {
    const changeColor = this.state.showHiddenSubs ? 'blackColor' : 'defaultColor';
    const changeColor2 = this.state.showHiddenSubs ? 'defaultColor' : 'blackColor';

    return (
      <div className="ItemInfomationBar" onScroll={this.handleScroll}>
        <div className="wrap">
          <ul className="reviewBar">
            <li className="itemInfomation1">
              <Link className={changeColor} to="/">
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

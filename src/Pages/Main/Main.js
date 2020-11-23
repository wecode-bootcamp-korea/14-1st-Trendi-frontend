import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import SimpleSlider from './SimpleSlider';
import ItemList from './ItemList';
import './Main.scss';
import '../../Components/Nav/Nav.scss';
import './SimpleSlider.scss';

const API = 'http://10.58.2.123:8000/products?category=2&sub-category=2';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ data: res.product_list });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="Main">
        <Nav />
        <SimpleSlider />
        {data.length && <ItemList MainAPI={this.state.data} />}
      </div>
    );
  }
}

export default Main;

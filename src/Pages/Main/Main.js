import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import SimpleSlider from './SimpleSlider';
import ItemList from './ItemList';
import configData from '../../config.json';
import './Main.scss';
import '../../Components/Nav/Nav.scss';
import './SimpleSlider.scss';
import Footer from '../../Components/Footer/Footer';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // fetch(`${configData.MAIN_URL}?category=2&sub-category=2`)
    fetch('http://10.58.2.123:8000/products/products?category=2&sub-category=2')
      .then((res) => res.json())
      .then((res) => {
        this.setState({ data: res.product_list });
      });
  }

  render() {
    console.log(this.state.data);
    const { data } = this.state;
    return (
      <div className="Main">
        <Nav />
        <SimpleSlider />
        {data.length && <ItemList mainItem={this.state.data} />}
        <Footer />
      </div>
    );
  }
}

export default Main;

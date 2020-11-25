import React, { Component } from 'react';
import SimpleSlider from './SimpleSlider';
import ItemList from './ItemList';
import configData from '../../config.json';
import './SimpleSlider.scss';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(`${configData.MAIN_URL}/products?category=2&sub-category=2`)
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
        <SimpleSlider />
        {data.length && <ItemList mainItem={this.state.data} />}
      </div>
    );
  }
}

export default Main;

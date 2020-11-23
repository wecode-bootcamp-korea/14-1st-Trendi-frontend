import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import SimpleSlider from './SimpleSlider';
import ItemList from './ItemList';
import configData from '../../config.json';
import './Main.scss';
import '../../Components/Nav/Nav.scss';
import './SimpleSlider.scss';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(`${configData.MAIN_URL}?category=2&sub-category=2`)
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
        {data.length && <ItemList mainItem={this.state.data} />}
      </div>
    );
  }
}

export default Main;

import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import SimpleSlider from './SimpleSlider';
import ItemList from './ItemList';
import './Main.scss';
import '../../Components/Nav/Nav.scss';
import './SimpleSlider.scss';

const API = 'http://10.58.7.223:8000/products?category=2&sub-category=2';

class Main extends Component {
  constructor(props) {
    console.log('부모 constructor');
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log('부모 componentDidMount');
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log('res:', res.get);
        this.setState({ data: res });
      });
  }

  //   fetch('http://localhost:3000/data/MOCK_DATA.json', {
  //     method: 'get',
  //   })
  //     .then((res) => res.json())
  //     .then((res) => this.setState({ data: res }));
  // }

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

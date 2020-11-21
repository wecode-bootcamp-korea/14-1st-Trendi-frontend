import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import SimpleSlider from './SimpleSlider';
import './Main.scss';
import '../../Components/Nav/Nav.scss';
import './SimpleSlider.scss';

class Main extends Component {
  constructor(props) {
    console.log('부모 constructor');
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // 원두님 api 붙여볼것
    // console.log('부모 componentDidMount');
    // fetch(API, { method: 'post', body: JSON.stringify({ category_num: 2, sub_category_num: 0 }) })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log('res확인', res);
    //     this.setState({ data: res.post });
    //   });

    fetch('http://localhost:3000/data/MOCK_DATA.json', {
      method: 'get',
    }).then((res) => this.setState({ data: res }));
  }

  render() {
    return (
      <div className="Main">
        <Nav />
        <SimpleSlider />
      </div>
    );
  }
}

export default Main;

import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import SimpleSlider from './SimpleSlider';
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
    console.log('부모 componentDidMount');
    fetch(API, { method: 'post', body: JSON.stringify({ category_num: 2, sub_category_num: 0 }) })
      .then((res) => res.json())
      .then((res) => {
        console.log('res확인', res);
        this.setState({ data: res.post });
      });
  }

  render() {
    // <<<<<<< HEAD
    // <<<<<<< HEAD
    //     const { data } = this.state;
    //     console.log('data 데이터 확인', this.state.data);
    //     if (this.state.data.length) {
    //       console.log('', this.state.data);
    //       return <div>{data && <ItemList MainAPI={data} />}</div>;
    //     } else {
    //       return '';
    //     }
    // =======
    //     return <div></div>;
    // >>>>>>> main
    // =======
    return (
      <div className="Main">
        <Nav />
        <SimpleSlider />
      </div>
    );
    // >>>>>>> main
  }
}

export default Main;

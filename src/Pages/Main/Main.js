import React, { Component } from 'react';
import Body from './Body';

const API = 'http://localhost:3000/data/MOCK_DATA.json';

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
        this.setState({ data: res });
      });
  }

  render() {
    console.log('부모 render');
    return (
      <div>{this.state.data.length && <Body MainAPI={this.state.data} />}</div>
    );
  }
}

export default Main;

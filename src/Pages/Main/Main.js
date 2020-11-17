import React, { Component } from 'react';
import Body from './Body';

const API = 'http://localhost:3000/data/MOCK_DATA.json';

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
        this.setState({ data: res });
      });
  }

  render() {
    return (
      <div>
        <Body MainAPI={this.state.data} />
      </div>
    );
  }
}

export default Main;

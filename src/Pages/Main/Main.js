import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/MOCK_DATA.json', {
      method: 'get',
    }).then((res) => console.log(res.json()));
  }

  render() {
    return <div>재원님 짱짱맨</div>;
  }
}

export default Main;

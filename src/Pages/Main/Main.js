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
    fetch(`${configData.GUESTHOUSE_URL}?trendi-pick=1`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ data: res.product_list });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="Main">
        <SimpleSlider />
        {data.length && <ItemList mainItem={data} />}
      </div>
    );
  }
}

export default Main;

import React, { Component } from 'react';

class Agreement extends Component{
  render(){
    const {data, index} = this.props;
    return(
      <label>
        <input type="checkbox" checked={data.isCheck} name={index} onChange={this.props.isCheck}/>{data.content}
      </label>
    );
  }
}
export default Agreement;
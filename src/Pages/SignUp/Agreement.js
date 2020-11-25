import React, { Component } from "react";
import "./Agreement.scss";

class Agreement extends Component {
  render() {
    const { data, index } = this.props;
    return (
      <div className="Agreement">
        <label>
          <input type="checkbox" checked={data.isCheck} name={index} onChange={this.props.isCheck} />
          {data.content}
          <span className="important">(필수)</span>
        </label>
      </div>
    );
  }
}
export default Agreement;

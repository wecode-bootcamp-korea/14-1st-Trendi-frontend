import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import SimpleSlider from "./SimpleSlider";
import "../../Components/Nav/Nav.scss";
import "./SimpleSlider.scss";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/MOCK_DATA.json", {
      method: "get",
    }).then((res) => console.log(res.json()));
  }

  render() {
    return (
      <div className="Main">
        {/* <Nav /> */}
        <SimpleSlider />
        <Footer />
      </div>
    );
  }
}

export default Main;

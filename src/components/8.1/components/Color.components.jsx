import React from "react";
import "./Color.style.css";

class Color extends React.Component {

  state = { favoriteColor: "green" };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "blue" });
    }, 1500);
  }
  componentDidUpdate() {
    document.querySelector("#myDiv").innerHTML =
      "The updated favorite color is " + this.state.favoriteColor;
  }
  render() {
    return (
      <div >
        <h1>My favorite color is <span style={{color:this.state.favoriteColor }}>{this.state.favoriteColor}</span></h1>
        <div id="myDiv"></div>
      </div>
    );
  }
}

export default Color;

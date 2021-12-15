import React from "react";
import "./ChangeBox.style.css";

class ColorBox extends React.Component {
  constructor() {
    super();
    this.state = {
      hslColorNum: 0,
      radius: "0%",
      colorCount: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        hslColorNum: Math.floor(Math.random() * 360),
        colorCount: this.state.colorCount + 1,
      });
      if (this.state.colorCount === 5) {
        this.setState({
          radius: "100%",
        });
      }
    }, 500);
  }

  render() {
    return (
      <div
        id="myDiv"
        style={{
          background: `hsl(${this.state.hslColorNum}, 100%, 50%)`,
          borderRadius: this.state.radius,
        }}
      ></div>
    );
  }
}

export default ColorBox;

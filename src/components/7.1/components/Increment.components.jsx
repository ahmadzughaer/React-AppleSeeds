import React from "react";
import "./Increment.style.css";

class Increment extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { num: 0 };
  //   }

  state = { num: 0 };

  incrementOnClick = () => {
    this.setState({ num: this.state.num + 1 });
  };

  decrementOnClick = () => {
    if (this.state.num > 0) {
      this.setState({ num: this.state.num - 1 });
    } else {
      this.state.num = 0;
    }
  };

  render() {
    return (
      <div className="main">
        <button onClick={this.decrementOnClick}>decrement</button>
        <button onClick={this.incrementOnClick}>increment</button>
        <h2>{this.state.num}</h2>
      </div>
    );
  }
}

export default Increment;

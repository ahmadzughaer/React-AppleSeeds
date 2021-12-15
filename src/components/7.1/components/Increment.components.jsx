import React from "react";
import "./Increment.style.css";

class Increment extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { num: 0 };
  //   }

  state = { num: 0 };

  incrementOnClick = () => {
    if (this.state.num < 10) {
      this.setState({ num: this.state.num + 1 });
    } else {
      this.state.num = 10;
    }
  };

  decrementOnClick = () => {
    if (this.state.num > -10) {
      this.setState({ num: this.state.num - 1 });
    } else {
      this.state.num = -10;
    }
  };

  render() {
    return (
      <div className="main">
        <button onClick={this.decrementOnClick}>decrement</button>
        <button onClick={this.incrementOnClick}>increment</button>
       { this.state.num > 0? <h2 style={{color:'green'}}>{this.state.num}</h2> : this.state.num < 0? <h2 style={{color:'red'}}>{this.state.num}</h2> : <h2 style={{color:'black'}}>{this.state.num}</h2>  }
      </div>
    );
  }
}



export default Increment;

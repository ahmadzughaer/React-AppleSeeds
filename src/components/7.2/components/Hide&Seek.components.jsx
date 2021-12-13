import React from "react";
import "./Hide&Seek.style.css";

class HideAndSeek extends React.Component {
//   state = { box: false };
  state = {display: 'block'};

  HideAndShow = () => {
    // this.setState({ box: !this.state.box });
    this.setState({ display: !this.state.display });
  };

  render() {
    return (
      <div className="main">
        <button onClick={this.HideAndShow}>Show/Hide</button>
        {/* {this.state.box ? <div className="box"></div> : <div></div>} */}
        {this.state.display ? <div className="box" style={{display : this.state.display}}></div> : <div></div>}
      </div>
    );
  }
}

export default HideAndSeek;

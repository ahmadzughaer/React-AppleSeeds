import React from "react";

class CardClass extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.url} alt="img" />
        <h1>{this.props.title}</h1>
        <p>{this.props.desc}</p>
        <div className="link">
          <button>{this.props.link1}</button>
          <button>{this.props.link2}</button>
        </div>
      </div>
    );
  }
}

export default CardClass;

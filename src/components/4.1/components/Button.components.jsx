import "./Button.style.css";
import React from "react";

const Button = (props) => {
  return (
    <div className="main">
        <button style={{fontWeight: props.fontSize }} >{props.text}</button>
    </div>
   
  );
};

export default Button;

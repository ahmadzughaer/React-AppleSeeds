import "./App.style.css";
import React from "react";
const data = ["hello", "world"];
const number1 = 5;
const number2 =6;
const string = `I love React!`

const BasicsOfJsx = () => {
  return (
    <div className="title">
      <h1>{data[0] + " " + data[1]}</h1>
      <p>{number1 + number2}</p>
      <p>The string's length is {string.length}</p>
    </div>
  );
};

export default BasicsOfJsx;

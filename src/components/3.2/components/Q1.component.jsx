import "./Quiz.style.css";
import React from "react";
import Q1Title from "./Q1Title.component";
import Q1Input from "./Q1Input.component";


const Quiz1 = () => {
  return (
    <div className="continer">
  <Q1Title></Q1Title>
 <Q1Input></Q1Input>
    </div>
  );
};

export default Quiz1;

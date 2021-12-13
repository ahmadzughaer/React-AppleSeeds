import "./Quiz.style.css";
import React from "react";
import QuizTitle from "./QuizTitle.component";
import Quiz1 from "./Q1.component";
import Quiz2 from "./Q2.component";

const Quiz = () => {
  return (
    <div className="continer">
      <QuizTitle></QuizTitle>
      <Quiz1></Quiz1>
      <Quiz2></Quiz2>
    </div>
  );
};

export default Quiz;

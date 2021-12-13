// import "./Card.style.css";
import React from "react";

const Card = (props) => {
  return (
    <div className="card">
        <img src={props.url}  alt="img"/>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <div className="link">
            <button>{props.link1}</button>
            <button>{props.link2}</button>
        </div>
    </div>
   
  );
};

export default Card;

// import "./Card.style.css";
import React from "react";

const Card = ({url, title, desc, link1, link2}) => {
  return (
    <div className="card">
        <img src={url}  alt="img"/>
        <h1>{title}</h1>
        <p>{desc}</p>
        <div className="link">
            <button>{link1}</button>
            <button>{link2}</button>
        </div>
    </div>
  );
};

export default Card;

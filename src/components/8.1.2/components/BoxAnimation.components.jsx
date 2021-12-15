import "./BoxAnimation.style.css";
import React, {useEffect }  from "react";

const BoxAnimate = () => {

    useEffect(() => {
         setTimeout(() => {
            document.querySelector(".animatedBox").style.display = 'block';
    }, 1000);
    setTimeout(() => {
        document.querySelector(".animatedBox").innerHTML ='';
}, 5000);
      });
  return (
    <div className="animatedBox">
        <div className="first"></div>
        <div className="second"></div>
        <div className="third"></div>
    </div>
   
  );
};

export default BoxAnimate;

import React from "react";

const CheckBox = ({label, checked}) =>{

  return (
      <div>
        <input type={'radio'} checked={checked}/>
        <label>{label}</label>
        </div>
  
  );
};
// }

export default CheckBox;

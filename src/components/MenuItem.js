import React from "react";
import LikePage from "../helpers/LikePage";



function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem" > 
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
      <LikePage/>
    </div>
  );
}

export default MenuItem;

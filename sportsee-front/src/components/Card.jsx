import React from "react";



/**
 * Component : Shows average sessions chart
 * @typedef {object} Props - item is key value pair and index concerns the position in the map loop
 * @return {React.ReactElement} 
 * 
 */



const Card = (props) => {
  const countNames = [
    ["kCal", "Calories"],
    ["g", "Protéines"],
    ["g", "Glucides"],
    ["g", "Lipides"],
  ];
  const imgInfo = [
    ["/img/calories-icon.svg", " icône calories"],
    ["/img/protein-icon.svg", " icône protéines"],
    ["/img/carbs-icon.svg", " icône glucides"],
    ["/img/fat-icon.svg", " icône lipides"],
  ];

  return (
    <li className="card">
      <img src={imgInfo[props.index][0]} alt={imgInfo[props.index][1]} />
      <div className="card-text">
        <h2>{props.item[1] + countNames[props.index][0]}</h2>
        <p>{countNames[props.index][1]}</p>
      </div>
    </li>
  );
};

export default Card;

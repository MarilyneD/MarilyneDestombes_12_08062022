import React from 'react';

const Card = (props) => {
    console.log("item",props.item)

    const countNames =[ ['kCal','Calories'],['g','Protéines'],['g','Glucides'],['g','Lipides']]

    return (
    
    <li className="card">
      
        {/* <img src={rentalprops.pictures[0]} alt={"image de " + rentalprops.title} /> */}
        <h2>{props.item[1]+countNames[props.index][0]}</h2>
        <p>{countNames[props.index][1]}</p>
   
    </li>




      
    );
};

export default Card;
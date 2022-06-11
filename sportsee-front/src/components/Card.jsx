import React from 'react';

const Card = (props) => {
    
    const countNames =[ ['kCal','Calories'],['g','Protéines'],['g','Glucides'],['g','Lipides']]
    const imgInfo =[["/img/calories-icon.svg"," icône calories"],["/img/protein-icon.svg"," icône protéines"],["/img/carbs-icon.svg"," icône glucides"],["/img/fat-icon.svg"," icône lipides"]]

    return (
    
    <li className="card">
      
        <img src={imgInfo[props.index][0]} alt=" " /> 
        <div className='card-text'>
        <h2>{props.item[1]+countNames[props.index][0]}</h2><br></br>
        <p>{countNames[props.index][1]}</p>
        </div>
    </li>




      
    );
};

export default Card;
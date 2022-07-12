import React from "react";
import PropTypes from 'prop-types';
import Card from "./Card";



/**
 * Component that builds side cards 
 * @param {Object} params
 * @param {Object} params.keydata  key value pairs, calorie count, protein count, etc...
 * @return {React.ReactElement} 
 */

// Object.entries transforme l'objet keydata en Array

const SideCards = ({ keydata }) => {

  return (
    <ul className="sidecards">
      {Object.entries(keydata).map((item, index) => (
        <Card key={index} item={item} index={index} />
      ))}
    </ul>
  );
};



// Props types
// keydata is an object inside the object maindata, keydata=maindata.keyData
SideCards.propTypes = {
  keydata: PropTypes.object.isRequired,
}



export default SideCards;

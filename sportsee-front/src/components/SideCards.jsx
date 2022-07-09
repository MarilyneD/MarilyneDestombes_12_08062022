import React from "react";
import Card from "./Card";




/**
 * Component that builds side cards 
 * @param {Object} params
 * @param {Object} params.keydata  key value pairs, calorie count, protein count, etc...
 * @return {React.ReactElement} 
 */

const SideCards = ({ keydata }) => {

  return (
    <ul className="sidecards">
      {Object.entries(keydata).map((item, index) => (
        <Card key={index} item={item} index={index} />
      ))}
    </ul>
  );
};

export default SideCards;

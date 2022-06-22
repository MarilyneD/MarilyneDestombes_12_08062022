import React from "react";
import Card from "./Card";

const SideCards = ({ keydata }) => {
  console.log("Object.entries(keydata)", Object.entries(keydata));

  return (
    <ul className="sidecards">
      {Object.entries(keydata).map((item, index) => (
        <Card key={index} item={item} index={index} />
      ))}
    </ul>
  );
};

export default SideCards;

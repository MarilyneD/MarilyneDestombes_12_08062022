import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const UserCard = (props) => {
  return (
    <NavLink to={"/user/" + props.id}>
      <li className="user-card">
        <img src={props.avatar} alt="avatar" />
        Sportif {props.id}
      </li>
    </NavLink>
  );
};

export default UserCard;

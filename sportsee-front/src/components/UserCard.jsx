import React from "react";
import { NavLink } from "react-router-dom";



/**
 * Component : Shows available users in the home page
 * @returns {React.ReactElement}
 */

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

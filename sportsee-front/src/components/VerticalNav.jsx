import React from "react";
import { NavLink } from "react-router-dom";


/**
 * Component : Shows vertical navigation bar
 * @returns {React.ReactElement}
 */


const VerticalNav = () => {
  return (
    <div className="vertical-navigation">
      <ul>
        <li className="nav-icon">
          <NavLink to="">
            <img src="/img/yoga.svg" alt="yoga icon " />
          </NavLink>
        </li>

        <li className="nav-icon">
          <NavLink to="">
            <img src="/img/swim.svg" alt="swim icon " />
          </NavLink>
        </li>

        <li className="nav-icon">
          <NavLink to="">
            <img src="/img/bike.svg" alt="bike icon " />
          </NavLink>
        </li>

        <li className="nav-icon">
          <NavLink to="">
            <img src="/img/fitness.svg" alt="fitness icon " />
          </NavLink>
        </li>
      </ul>
      <div className="copyright"> Copyright, SportSee 2020</div>
    </div>
  );
};

export default VerticalNav;

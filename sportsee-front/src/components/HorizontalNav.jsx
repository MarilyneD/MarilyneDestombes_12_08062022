import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";



/**
 * Component : Shows horizontal navigation bar
 * @returns {React.ReactElement}
 */




const Navigation = () => {
  return (
    <div className="horizontal-navigation">
      <Logo />
      <ul>
        <NavLink to="/" className="">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="" className="">
          <li>Profil</li>
        </NavLink>
        <NavLink to="" className="">
          <li>Réglage</li>
        </NavLink>
        <NavLink to="" className="">
          <li>Communauté</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;

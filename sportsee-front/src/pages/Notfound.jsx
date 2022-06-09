import React from "react";
import { NavLink } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="notfound">
      <div className="error">404 </div>
      Oups! La page que vous demandez n'existe pas. <br />
      <NavLink className="back-home" to="/">
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
};

export default Notfound;

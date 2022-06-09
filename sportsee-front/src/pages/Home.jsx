import React from "react";
import { NavLink } from "react-router-dom";
//import BannerHome from "../components/BannerHome";
//import Rentals from "../components/Rentals";

const Home = () => {
  return (
    <div>
     
     <ul>
        <NavLink to="/user/12" className="">
          <li>Sportif 12</li>
        </NavLink>
        <NavLink to="/user/18" className="">
          <li>Sportif 18</li>
        </NavLink>
        </ul>

         

    </div>
  );
};

export default Home;

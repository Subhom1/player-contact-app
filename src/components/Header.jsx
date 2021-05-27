import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-around">
      <NavLink className="navbar-brand" to="/">
        Player Contact App
      </NavLink>
    </nav>
  );
};

export default Header;

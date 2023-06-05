import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="main-navigation">
        <ul className="menu flex gap-10 ">
          <li className="menu-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/services">Services</NavLink>
            <ul className="sub-menu hidden">
              <li className="menu-item">
                <NavLink to="/services/offline">Offline</NavLink>
              </li>
              <li className="menu-item">
                <NavLink to="/services/online">Online</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

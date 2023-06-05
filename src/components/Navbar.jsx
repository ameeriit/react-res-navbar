import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="main-navigation hidden gap-10 md:flex">
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
        <ul className="social-menu gap-4 hidden md:flex">
          <a href="https://www.facebook.com/example-page">
            <FaFacebook size={24} color="#3b5998" />
          </a>
          <a href="https://twitter.com/example-account">
            <FaTwitter size={24} color="#1da1f2" />
          </a>
          <a href="https://www.instagram.com/example-profile">
            <FaInstagram size={24} color="#e4405f" />
          </a>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

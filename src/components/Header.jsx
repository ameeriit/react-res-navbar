import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/a-logo.jpeg";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Header = () => {
  const [hammenu, setHammenu] = useState(false);

  const handleHamClick = () => {
    setHammenu(!hammenu);
  };
  return (
    <header className="py-4 bg-slate-800 text-white font-semibold">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="site-title flex items-center">
          <img
            src={Logo}
            className="mix-blend-lighten"
            width={50}
            height={50}
            alt="logo.jpeg"
          />
          <Link to="/" className="text-2xl">
            ameeriit
          </Link>
        </div>
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
        <button className="md:hidden" onClick={handleHamClick}>
          <span
            className={`block w-7 h-0.5 bg-slate-200 mb-1.5 rounded duration-75 ${
              hammenu ? "transform rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-7 h-0.5 bg-slate-200 rounded duration-0 ${
              hammenu ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-7 h-0.5 bg-slate-200 mt-1.5 rounded duration-75 ${
              hammenu ? "transform -rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Logo from "../images/a-logo.jpeg";
import HamMenu from "./HamMenu";

const Header = () => {
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
        <Navbar />
        <HamMenu />
      </div>
    </header>
  );
};

export default Header;

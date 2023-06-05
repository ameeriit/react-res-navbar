import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";

const Header = () => {
  return (
    <header className="py-4 bg-slate-800 text-white font-semibold">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl">
          ameeriit
        </Link>
        <Navbar />
        <SocialIcons />
      </div>
    </header>
  );
};

export default Header;

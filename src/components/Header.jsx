import { Link } from "react-router-dom";
import Logo from "../images/a-logo.jpeg";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [toggleHam, setToggleHam] = useState(false);

  const handleToggleHamClick = () => {
    setToggleHam(!toggleHam);
  };

  return (
    <header className="bg-[#34495E] text-cyan-100 font-bold">
      <div className="container mx-auto py-2 flex justify-between items-center">
        {/* Site logo and title */}
        <div className="site-title flex items-center">
          <Link to="/">
            <img
              src={Logo}
              className="mix-blend-lighten"
              width={50}
              height={50}
              alt="logo.jpeg"
            />
          </Link>
        </div>
        {/* Menu */}
        <nav
          className={`md:flex gap-8 md:items-center md:static fixed transition duration-150 ease-in-out ${
            toggleHam
              ? "left-0 bg-black  h-screen w-screen top-0 flex flex-col items-center justify-center transition duration-150 ease-in-out"
              : "left-[100%]"
          }`}
        >
          <ul
            className={`menu md:flex md:gap-10 ${
              toggleHam ? "flex flex-col gap-4 items-center" : ""
            }`}
          >
            <li className="menu-item">
              <NavLink
                className="transition duration-150 ease-in-out hover:text-[#28B463]"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className="transition duration-150 ease-in-out hover:text-[#28B463]"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className="transition duration-150 ease-in-out hover:text-[#28B463]"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                className="transition duration-150 ease-in-out hover:text-[#28B463]"
                to="/services"
              >
                Services
              </NavLink>
              <ul className="sub-menu hidden">
                <li className="menu-item">
                  <NavLink
                    className="transition duration-150 ease-in-out hover:text-[#28B463]"
                    to="/services/offline"
                  >
                    Offline
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    className="transition duration-150 ease-in-out hover:text-[#28B463]"
                    to="/services/online"
                  >
                    Online
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
          {/* social icons */}
          <ul className="social-icons flex gap-4">
            <a href="https://www.facebook.com/example-page">
              <FaFacebook size={16} color="#3b5998" />
            </a>
            <a href="https://twitter.com/example-account">
              <FaTwitter size={16} color="#1da1f2" />
            </a>
            <a href="https://www.instagram.com/example-profile">
              <FaInstagram size={16} color="#e4405f" />
            </a>
          </ul>
        </nav>
        <button className="md:hidden z-10" onClick={handleToggleHamClick}>
          <span
            className={`block bg-cyan-100 w-[24px] h-[2px] mb-[4px] transition duration-300 ease-in-out ${
              toggleHam ? "transform rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block bg-cyan-100 w-[24px] h-[2px] transition duration-300 ease-in-out ${
              toggleHam ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block bg-cyan-100 w-[24px] h-[2px] mt-[4px] transition duration-300 ease-in-out ${
              toggleHam ? "transform -rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function SocialIcons() {
  return (
    <div className="social-menu  gap-4 hidden md:flex">
      <a href="https://www.facebook.com/example-page">
        <FaFacebook size={24} color="#3b5998" />
      </a>
      <a href="https://twitter.com/example-account">
        <FaTwitter size={24} color="#1da1f2" />
      </a>
      <a href="https://www.instagram.com/example-profile">
        <FaInstagram size={24} color="#e4405f" />
      </a>
    </div>
  );
}

export default SocialIcons;

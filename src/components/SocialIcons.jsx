import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function SocialIcons() {
  return (
    <div className="social-menu flex gap-4">
      <a href="https://www.facebook.com/example-page">
        <FaFacebook size={32} color="#3b5998" />
      </a>
      <a href="https://twitter.com/example-account">
        <FaTwitter size={32} color="#1da1f2" />
      </a>
      <a href="https://www.instagram.com/example-profile">
        <FaInstagram size={32} color="#e4405f" />
      </a>
    </div>
  );
}

export default SocialIcons;

import React, { useState } from "react";

const HamMenu = () => {
  const [hammenu, setHammenu] = useState(false);
  const handleHamClick = () => {
    setHammenu(!hammenu);
  };
  return (
    <>
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
    </>
  );
};

export default HamMenu;

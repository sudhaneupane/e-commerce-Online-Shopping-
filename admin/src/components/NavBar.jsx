import React from "react";
import { assets } from "../assets/assets";

const NavBar = () => {
  return (
    <div>
      <div className="flex items-center py-2 px-[4%] justify-between">
        <img className="w-[max(10%,80px)]" src={assets.forever} alt="" />
        <button className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavBar;

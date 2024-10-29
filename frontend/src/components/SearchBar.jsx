import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation, useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  const [visible, setVisible] = useState(true);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else setVisible(false);
  }, [location]);

  return showSearch && visible ? (
    <div className=" border-b border-t bg-gray-50 text-center rounded-full  border-gray-400">
      <div className="inline-flex items-center justify-center border-gray-400 px-5 py-1 my-3 mx-3  w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img src={assets.search_icon} alt="" className="w-6" />
      </div>
      <img
        onClick={() => {
          setShowSearch(false);
        }}
        className="inline w-4 cursor-pointer"
        src={assets.close_icon}
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;

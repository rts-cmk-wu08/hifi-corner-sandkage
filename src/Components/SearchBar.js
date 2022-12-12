import React from "react";
import "./SearchBar.scss";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ placeholder }) => {
  return (
    <form className="searchContainer">
      <input className="searchInput" type="text" placeholder={placeholder} />
      <FaSearch className="searchIcon" />
    </form>
  );
};

export default SearchBar;

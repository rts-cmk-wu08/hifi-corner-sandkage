import React from "react";
import "./SearchBar.scss";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ placeholder }) => {
  return (
    <form action="/shop" className="searchContainer">
      <input
        className="searchInput"
        type="search"
        name="search"
        placeholder={placeholder}
      />
      <FaSearch className="searchIcon" />
    </form>
  );
};

export default SearchBar;

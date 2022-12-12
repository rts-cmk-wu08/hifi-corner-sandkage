import React from "react";
import "./SearchBar.scss";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchBar = ({ placeholder }) => {
  return (
    <form action="/shop" className="searchContainer">
      <input
        className="searchInput"
        type="search"
        name="search"
        placeholder={placeholder}
      />
      <button className="searchIcon" type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;

import React from "react";
import "./SearchBar.scss";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ placeholder }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/shop?search=" + e.target.search.value);
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="searchContainer">
      <input
        className="searchInput"
        type="text"
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

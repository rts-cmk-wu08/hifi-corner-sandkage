import "./Header.scss";
import Logo from "../Components/Logo";
import Navigation from "./Navigation";
import { FaUser } from "react-icons/fa";
import SearchBar from "../Components/SearchBar";
import ShoppingCart from "../Components/Shoppingcart";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Header = () => {

  const { totalCount, totalPrice } = useContext(CartContext)

  return (
    <header className="header">
      <Logo />
      <Navigation />
      <div className="header_icons">
        <SearchBar placeholder="Search product..." />
        <FaUser className="user_icon" />
        <ShoppingCart />
        <div className="totalCount">{totalCount}</div>
        <div style={{color: "white"}}>{totalPrice}</div>
      </div>
    </header>
  );
};

export default Header;

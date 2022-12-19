import "./Header.scss";
import Logo from "../Components/Logo";
import Navigation from "./Navigation";
import { FaUser } from "react-icons/fa";
import SearchBar from "../Components/SearchBar";
import ShoppingCart from "../Components/Shoppingcart";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <div className="header_icons">
        <SearchBar placeholder="Search product..." />
        <FaUser className="user_icon" />
        <ShoppingCart />

      </div>
    </header>
  );
};

export default Header;

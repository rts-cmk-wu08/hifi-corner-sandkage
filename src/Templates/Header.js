import "./Header.scss";
import Logo from "../Components/Logo";
import Navigation from "./Navigation";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />

      <div className="header_icons">
        <FaUser className="user_icon" />
        <FaShoppingCart className="shoppingcart_icon" />
      </div>
    </header>
  );
};

export default Header;

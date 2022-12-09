import "./Header.scss";
import Logo from "../Components/Logo";
import Navigation from "./Navigation";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <FaShoppingCart />
    </header>
  );
};

export default Header;

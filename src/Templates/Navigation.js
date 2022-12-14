import { Link } from "react-router-dom";
import NavItem from "../Components/NavItem";
import "./Navigation.scss"

const Navigation = () => {
    return ( 
        <nav className="navbar">
            <Link className="navLink" to="/shop"><NavItem title="Shop" /></Link>
            <Link className="navLink" to="/aboutus"><NavItem title="About Us" /></Link>
            <Link className="navLink" to="/contactus"><NavItem title="Contact Us" /></Link>
        </nav>
     );
}

export default Navigation;
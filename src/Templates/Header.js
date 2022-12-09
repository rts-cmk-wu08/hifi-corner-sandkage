import "./Header.scss"
import Logo from "../Components/Logo";
import Navigation from "./Navigation";

const Header = () => {
    return ( 
        <header className="header">
           <Logo /> 
           <Navigation />
        </header>
     );
}
 
export default Header;
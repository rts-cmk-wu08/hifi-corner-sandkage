import { Link } from "react-router-dom";
import "./Buttons.scss";

const SeeAllProductsButton = () => {
    return ( <Link to="/shop"><button className="button button_seeallproducts">See all products</button></Link> );
}
 
export default SeeAllProductsButton;
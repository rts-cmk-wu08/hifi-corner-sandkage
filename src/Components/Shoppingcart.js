import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Templates/Header.scss";
import "./Shoppingcart.scss";


const ShoppingCart = () => {
    return (
        <Link className="cart_icon">
            <p className="cart_contents">2</p>
            <FaShoppingCart className="shoppingcart_icon" />
            <div className="cart_container">

            </div>
        </Link>
    );
}

export default ShoppingCart;
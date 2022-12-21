import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Templates/Header.scss";
import "./Shoppingcart.scss";


const ShoppingCart = () => {
    return (
        <Link className="cart_icon">
            <FaShoppingCart className="shoppingcart_icon" />
            {/* <div className="cart_container">
                <h2 className="popupHeadline">Cart</h2>
                <p>Sub total:</p>
                <button>Go to cart</button>
                <button>Go to payment</button>
            </div> */}
        </Link>
    );
}

export default ShoppingCart;
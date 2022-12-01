import { Link } from "react-router-dom";
import "./Footer.scss";
import { AiOutlinePhone } from "react-icons/ai";
import { FiFacebook,FiYoutube,FiTwitter,FiInstagram } from "react-icons/fi";
import Footercards from "./Footer_cards.png"


const Footer = () => {
    return ( 
    <footer>
        <nav className="footer_nav">
            <div className="navigation"><Link>Home</Link>
            <Link>Shop</Link>
            <Link>About Us</Link></div>
            <div className="faq">
            <Link>Returns & Refunds</Link>
            <Link>Delivery<span>Privacy Policy</span></Link>
            <Link>Terms & Conditions</Link>
            </div>
        </nav>
        
        <div className="footer_contact">
            <p>Contact</p>
            <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
            <p>
            <AiOutlinePhone className="phone_icon"/>
            0131 556 7901</p>
            <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>       
            <p>
            <AiOutlinePhone className="phone_icon"/>
            01324 629 011</p>
            <div className="socials">
            <FiFacebook className="social_icon"/>
            <FiYoutube className="social_icon"/>
            <FiTwitter className="social_icon"/>
            <FiInstagram className="social_icon"/>
            </div>
           
        </div>
        <div className="footer_copy">
            <img src={Footercards} alt="" />
            <div className="copyright">
            <p>Hi Fi Corner (Edinburgh) Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</p>
            <p>Designed & Built by WU07 :)</p>
            </div>
        </div>
    </footer> 
    );
}
 
export default Footer;
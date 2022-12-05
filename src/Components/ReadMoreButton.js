import { Link } from "react-router-dom";
import "./Buttons.scss"

const ReadMoreButton = ({ id }) => {
    console.log(id)
    return ( <Link to={`/product/${id}`} key={id}><button className="button button_readmore">Read more</button></Link> );
}
 
export default ReadMoreButton;
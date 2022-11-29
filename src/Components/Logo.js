import "./Logo.scss"
import "../global.scss"

const Logo = () => {
    return ( 
        <>
        <img className="logo" src="http://localhost:4000/assets/hifi_corner_logo.png" alt="" />
        <h1 className="$h1-color">Products</h1>
        </>
     );
}
 
export default Logo;
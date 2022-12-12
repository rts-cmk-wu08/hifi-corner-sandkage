import "../Components/ProductCards.scss";
import "../global.scss";
import "./ProductPage.scss";
import "../Components/Buttons.scss"
import axios from "axios";
import { useEffect, useState } from "react";
import Sortbyform from "../Components/Sortbyform";
import { useSearchParams } from "react-router-dom";

const Productpage = () => {
    const [params] = useSearchParams();
    /* console.log(params.get("search")) */
    const [allProducts, setAllProducts] = useState();
    const [loading, setLoading] = useState(true);
    const defaultFetch = 'http://localhost:4000/products';
    

    useEffect(() => {
        axios(defaultFetch + `?q=${params.get("search")}`)
        .then(response => setAllProducts(response.data))
        .finally(() => setLoading(false))
    }, []);

    return loading ? <p>Loading...</p> :( 
        <section className="productpage_container">
            <div className="searchby">
            <h2>PRODUCTS</h2>
                <div className="searchby_container">
                    <h3>Sort by</h3>
                    <Sortbyform/>
                </div>
            </div>
            <div className="products">
            {allProducts.map((singleproduct) => (
                <figure className="productcard productcard_productpage">
                    <img src={`http://localhost:4000${singleproduct.images}`} alt={singleproduct.title} />
                    <h3>{singleproduct.title}</h3>
                    <p>£ {singleproduct.price}</p>
                    <div className="stock_container"><button className="button_productpage">Add to cart</button><p className="stock_text">In stock<div className="stock_icon"></div></p></div>
                    
                    
                </figure>
            ))}
            </div>

        </section>
     );
}
 
export default Productpage;
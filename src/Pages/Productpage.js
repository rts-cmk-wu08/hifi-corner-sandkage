import "../Components/ProductCards.scss";
import "../global.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const Productpage = () => {
    const [allProducts, setAllProducts] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios('http://localhost:4000/products')
        .then(response => setAllProducts(response.data))
        .finally(() => setLoading(false))
    }, []);

    return loading ? <p>Loading...</p> :( 
        <section className="productpage_container">
            <h2>PRODUCTS</h2>
            {allProducts.map((singleproduct) => (
                <figure className="productcard productcard_productpage">
                    <img src={`http://localhost:4000${singleproduct.images}`} alt={singleproduct.title} />
                    <h3>{singleproduct.title}</h3>
                    <p>£ {singleproduct.price}</p>
                </figure>
            ))}

        </section>
     );
}
 
export default Productpage;
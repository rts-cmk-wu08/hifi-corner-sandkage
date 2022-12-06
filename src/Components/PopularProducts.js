import "../global.scss"
import "./PopularProducts.scss";
import "./ProductCards.scss"
import axios from "axios";
import { useEffect, useState } from "react";
import ReadMoreButton from "./ReadMoreButton";
import SeeAllProductsButton from "./SeeAllProductsButton";


const PopularProducts = () => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios('http://localhost:4000/products')
        .then(response => setProducts(response.data))
        .finally(() => setLoading(false))
    }, []);



    return loading ? <p>Loading...</p> :(
        <section>
            <div>
            <h1>POPULAR PRODUCTS</h1>
            <SeeAllProductsButton/>
            </div>
            {
                products.map((product) => (
                    <article className="productcard productcard_popularproducts" key={product.id}>
                        <img src={`http://localhost:4000${product.images}`} alt={`${product.title}`}/>
                        <h3>{product.title}</h3>
                            <p>£ {product.price}</p>
                            <ReadMoreButton id={product.id}/>
                    </article>
                ))}
        </section>
    )
}
 
export default PopularProducts;
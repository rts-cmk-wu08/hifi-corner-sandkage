import axios from "axios";
import { useEffect, useState } from "react";



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
            {
                products.map((product) => (
                    <article>
                        <img src={`${product.images}`} alt={`${product.title}`}/>
                        <h3>{product.title}</h3>
                        <p>£ {product.price}</p>


                    </article>
                ))}
        </section>
    )
}
 
export default PopularProducts;
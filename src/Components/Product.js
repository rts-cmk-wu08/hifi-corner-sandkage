import { useLoaderData } from "react-router-dom";

const Product = () => {
    const productData = useLoaderData();

    return ( 
    <article>
        <h2>PRODUCT</h2>
        <img src={`http://localhost:4000/${productData.images}`} alt={productData.title} />
        <h3>{productData.title}</h3>
        <p>£ {productData.price}</p>
        <p>{productData.stock}</p>
    </article>
    );
}
 
export default Product;

export async function loader ({ params }){
    const response = await fetch(
        "http://localhost:4000/products/" + params.id
    );
    const data = await response.json()
    return data;
}
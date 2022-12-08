import { useLoaderData } from "react-router-dom";

const Product = () => {
    const productData = useLoaderData();

    return ( 
    <article>
        <h2>{productData.title}</h2>
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
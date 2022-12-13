import { useLoaderData } from "react-router-dom";
import "../Components/Product.scss";

const Product = () => {
  const productData = useLoaderData();

  return (
    <>
      <h2>PRODUCT</h2>
      <article className="productContainer">
        <img
          className="productsImages"
          src={`http://localhost:4000/${productData.images}`}
          alt={productData.title}
        />
        <div>
          <h3>{productData.title}</h3>
          <p>{productData.description}</p>
          <p>£ {productData.price}</p>
          <p>{productData.stock}</p>
        </div>
      </article>
    </>
  );
};

export default Product;

export async function loader({ params }) {
  const response = await fetch("http://localhost:4000/products/" + params.id);
  const data = await response.json();
  return data;
}

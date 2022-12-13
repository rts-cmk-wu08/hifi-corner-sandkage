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
        <div className="productDescription">
          <h3>{productData.title}</h3>
          <p>{productData.description}</p>
          <div className="productBtn">
            <div className="colorBtn_black color"></div>
            <div className="text">
              <p>Black</p>
            </div>
          </div>
          <div className="productBtn">
            <div className="colorBtn_silver color"></div>
            <div className="text">
              <p>Silver</p>
            </div>
          </div>
          <div className="productBtn">
            <div className="colorBtn_gold color"></div>
            <div className="text">
              <p>Gold</p>
            </div>
          </div>
          <p className="productPrice">£ {productData.price}</p>
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

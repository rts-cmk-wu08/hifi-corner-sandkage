import { useLoaderData } from "react-router-dom";
import "../Components/Product.scss";
import ImageSlider from "./ImageSlider.js"

const Product = () => {
  const productData = useLoaderData();

  return (
    <>
      <h2>PRODUCT</h2>
      <article className="productContainer">
        <ImageSlider images={productData.images}/>
        <div className="productDescription">
          <h3>{productData.title}</h3>
          <p>{productData.description}</p>

          <div className="product">
            <label className="black" for="black">
              <input type="radio" name="radio" className="silver" />
              Black
            </label>
            <label className="silver" for="colorBtn_silver color">
              <input className="" type="radio" name="radio" />
              Silver
            </label>
            <label className="gold" for="colorBtn_gold color">
              <input type="radio" className="gold" name="radio" />
              Gold
            </label>
          </div>
          <p className="productPrice">£ {productData.price}</p>
          <div className="inStock"></div>
          <button className="addtocartBtn">Add to cart</button>
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

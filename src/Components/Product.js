import { useLoaderData } from "react-router-dom";
import "../Components/Product.scss";
import ImageSlider from "./ImageSlider.js";

const Product = () => {
  const productData = useLoaderData();

  return (
    <>
      <h2 className="product_heading">PRODUCT</h2>
      <article className="productContainer">
        <ImageSlider images={productData.images} />
        <div className="productDescription">
          <h3>{productData.title}</h3>
          <p>{productData.description}</p>

          <div className="product">
            <label className="black" for="black_Btn">
              <input className="radio black" type="radio" name="radio"  />
            </label>
            <label className="silver" for="silver_Btn">
              <input className="radio silver" type="radio" name="radio" />
            </label>
            <label className="gold" for="gold_Btn">
              <input className="radio gold" type="radio" name="radio" />
            </label>
          </div>
          
          <p className="productPrice">£ {productData.price}</p>
          <div className="inStock"></div>
          <button className="addtocartBtn">Add to cart</button>
          <p>{productData.stock}</p>
        </div>
      </article>
      <article className="specsContainer">
        <h3>Product specifications</h3>
        <table>
          {productData.specs.map((specdata) => (
            <th>{specdata.name + specdata.value}</th>
          ))}
          <td></td>
          <th></th>
          <td></td>
        </table>
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

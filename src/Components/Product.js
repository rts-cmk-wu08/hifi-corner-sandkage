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
<<<<<<< HEAD
              <input className="radio" type="radio" name="radio" />
=======
              <input className="radio black" type="radio" name="radio"  />
>>>>>>> f909268debcfd1a6e55b2a0bf32efc584afd11ab
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
      <h3>Product specifications</h3>
      <article className="specsContainer">
        <table>
          {productData.specs.map((specdata) => (
            <>
              <div className="specifications">
                <th className="specsheader">{specdata.name}</th>
                <td>{specdata.value}</td>
              </div>
            </>
          ))}
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

import "../Components/ProductCards.scss";
import "../global.scss";
import "./ProductPage.scss";
import "../Components/Buttons.scss"
import axios from "axios";
import { useEffect, useState } from "react";
import Sortbyform from "../Components/Sortbyform";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Productpage = () => {
    const fetchUrl = 'http://localhost:4000/products';
    const [params] = useSearchParams();
    const [allProducts, setAllProducts] = useState();
    const [loading, setLoading] = useState(true);
    const [defaultFetch, setDefaultfetch] = useState(fetchUrl)

    useEffect(() => {
        console.log("her er searchparams " + params.get("search"))
        if (params.get("search") !== null) {
            setDefaultfetch(fetchUrl + `?q=${params.get("search")}`)
        } else {
            setDefaultfetch(fetchUrl)
        }
    }, [params]);

    useEffect(() => {
        console.log("default fetch er =" + defaultFetch)
        axios(defaultFetch)
            .then(response => setAllProducts(response.data))
            .finally(() => setLoading(false))
    }, [defaultFetch]);

    /*     useEffect(() => {
            axios(searchParams.get("search") ? defaultFetch + `?q=${searchParams.get("search")}` : navigate(defaultFetch))
                .then(response => setAllProducts(response.data))
                .finally(() => setLoading(false))
        }, [navigate, searchParams, setSearchParams]); */

    return loading ? <p>Loading...</p> : (
        <section className="productpage_container">
            <div className="searchby">
                <h2>PRODUCTS</h2>
                <div className="searchby_container">
                    <h3>Sort by</h3>
                    <Sortbyform />
                </div>
            </div>
            <div className="products">
                {allProducts.map((singleproduct) => (
                    <figure className="productcard productcard_productpage" key={singleproduct.id}>
                        <Link to={`/product/${singleproduct.id}`}><img src={`http://localhost:4000${singleproduct.images[0]}`} alt={singleproduct.title} /></Link>
                        <h3>{singleproduct.title}</h3>
                        <p>£ {singleproduct.price}</p>
                        <div className="stock_container">
                            <button className="button_productpage">Add to cart</button><p className="stock_text">In stock<i className="stock_icon"></i></p>
                        </div>
                    </figure>
                ))}
            </div>

        </section>
    );
}

export default Productpage;
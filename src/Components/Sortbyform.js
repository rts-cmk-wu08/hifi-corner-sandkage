import "./Sortbyform.scss";
import React from "react";
import { useNavigate } from "react-router-dom";


const Sortbyform = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/shop?search=${e.target.name}`);
        e.target.reset();
    };
    return (
        <form action="/shop" className="sortingform">
            <h3 className="sortbyheading">Sort by</h3>
            <div className="brand_form">
                <label className="sort_title">Brand</label>
                <i></i>
                <label>Creek</label>
                <input type="checkbox" name="Creek" id="" onClick={handleSubmit} />
                <label>Epos</label>
                <input type="checkbox" name="Epos" id="" onClick={handleSubmit} />
                <label>Exposure</label>
                <input type="checkbox" name="Exposure" id="" onClick={handleSubmit} />
                <label>Harbeth</label>
                <input type="checkbox" name="Harbeth" id="" onClick={handleSubmit} />
                <label>Manley</label>
                <input type="checkbox" name="Manley" id="" onClick={handleSubmit} />
                <label>Parasound</label>
                <input type="checkbox" name="Parasound" id="" onClick={handleSubmit} />
            </div>
            <div className="color_form">
                <label className="sort_title">Color</label>
                <i></i>
                <label>White</label>
                <input type="checkbox" name="" id="" />
                <label>Black</label>
                <input type="checkbox" name="" id="" />
                <label>Grey</label>
                <input type="checkbox" name="" id="" />
            </div>
        </form>
    );
}

export default Sortbyform;
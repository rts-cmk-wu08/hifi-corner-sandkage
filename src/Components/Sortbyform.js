import "./Sortbyform.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Sortbyform = () => {
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
        setChecked(!checked);
        setChecked(navigate(`/shop?search=${e.target.name}`))
    }
    return (
        <form action="/shop" className="sortingform">
            <h3 className="sortbyheading">Sort by</h3>
            <div className="brand_form">
                <label className="sort_title">Brand</label>
                <i></i>
                <label>Creek</label>
                <input type="checkbox" name="Creek" id="" onChange={handleChange} />
                <label>Epos</label>
                <input type="checkbox" name="Epos" id="" onChange={handleChange} />
                <label>Exposure</label>
                <input type="checkbox" name="Exposure" id="" onChange={handleChange} />
                <label>Harbeth</label>
                <input type="checkbox" name="Harbeth" id="" onChange={handleChange} />
                <label>Manley</label>
                <input type="checkbox" name="Manley" id="" onChange={handleChange} />
                <label>Parasound</label>
                <input type="checkbox" name="Parasound" id="" onChange={handleChange} />
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
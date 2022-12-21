import "./Sortbyform.scss";

const Sortbyform = () => {
    return (
        <form action="/shop" className="sortingform">
            <div className="brand">
                <label>Brand</label>
                <i></i>
                <label>Creek</label>
                <input type="checkbox" name="" id="" />
                <label>Epos</label>
                <input type="checkbox" name="" id="" />
                <label>Exposure</label>
                <input type="checkbox" name="" id="" />
                <label>Harbeth</label>
                <input type="checkbox" name="" id="" />
                <label>Manley</label>
                <input type="checkbox" name="" id="" />
                <label>Parasound</label>
                <input type="checkbox" name="" id="" />
            </div>
            <div className="color">
                <label>Color</label>
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
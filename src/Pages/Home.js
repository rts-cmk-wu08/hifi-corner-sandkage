import PopularProducts from "../Components/PopularProducts";
import Video from "../Components/Video";
import "./Home.scss"

const Home = () => {
    return (
        <div className="home_container">
        <Video/>
        <PopularProducts/>
        </div>
     );
}
 
export default Home;
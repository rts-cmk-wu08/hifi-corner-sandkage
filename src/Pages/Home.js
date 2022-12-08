import PopularProducts from "../Components/PopularProducts";
import Video from "../Components/Video";
import WhatWeDo from "../Components/WhatWeDo";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home_container">
      <Video />
      <PopularProducts />
      <WhatWeDo />
    </div>
  );
};

export default Home;

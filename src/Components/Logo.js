import "./Logo.scss";
import "../global.scss";

const Logo = () => {
  return (
    <>
      <a href="http://localhost:3000/">
        {" "}
        <img
          className="logo"
          src="http://localhost:4000/assets/hifi_corner_logo.png"
          alt=""
        />
      </a>
    </>
  );
};

export default Logo;

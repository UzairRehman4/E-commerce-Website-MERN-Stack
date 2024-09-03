import { Link } from "react-router-dom";
import bannerImg from "../../assets/header.png";

const Banner = () => {
  return (
    <div className="section__container header__container">
      <div className="header__content z-30">
        <h4 className="uppercase">Up To 20% Discount on</h4>
        <h1>Girl&apos;s Fashion</h1>
        <p className="font-sans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          eum magnam aperiam voluptatem vitae dolorem debitis nam repudiandae
          amet possimus labore ducimus deserunt fuga quidem reiciendis.
        </p>
        <button className="btn">
          <Link to="/shop">Explore Now</Link>
        </button>
      </div>
      <div className="header__image">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;

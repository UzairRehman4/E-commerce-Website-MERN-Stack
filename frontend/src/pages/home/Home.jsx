import TrendingProducts from "../Shop/Trending_Products";
import Banner from "./Banner";
import Categories from "./Categories";
import Hero_Section from "./Hero_Section";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <Hero_Section />
      <TrendingProducts />
    </>
  );
};

export default Home;

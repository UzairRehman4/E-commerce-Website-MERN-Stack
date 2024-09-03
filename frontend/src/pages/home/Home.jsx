import Blogs from "../blog/Blogs";
import TrendingProducts from "../Shop/Trending_Products";
import Banner from "./Banner";
import Categories from "./Categories";
import DealsSection from "./DealsSection";
import Hero_Section from "./Hero_Section";
import PromoBanner from "./PromoBanner";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <Hero_Section />
      <TrendingProducts />
      <DealsSection />
      <PromoBanner />
      <Blogs />
    </>
  );
};

export default Home;

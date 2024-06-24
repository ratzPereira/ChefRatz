import Hero from "../../components/Hero.jsx";
import CategoryWrapper from "../category/CategoryWrapper.jsx";
import FeaturedSection from "./FeaturedSection.jsx";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center w-full py-20">
        <Hero />
        <CategoryWrapper />
      </div>
      <FeaturedSection />
    </div>
  );
};

export default Home;

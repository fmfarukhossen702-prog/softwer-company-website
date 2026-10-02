import BannerHome from "../component/Home/BannerHome";
import ServideHome from "../component/Home/ServideHome";
import ChooseHome from "../component/Home/ChooseHome";

const Home = () => {
  return (
    <div className="bg-blackPrimary text-white">
      <BannerHome />
      <ServideHome />
      <ChooseHome />
    </div>
  );
};

export default Home;

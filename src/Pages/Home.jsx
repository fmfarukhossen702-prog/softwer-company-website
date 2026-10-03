import BannerHome from "../component/Home/BannerHome";
import ServideHome from "../component/Home/ServideHome";
import ChooseHome from "../component/Home/ChooseHome";
import StartHome from "../component/Home/StartHome";
import FAQ from "../component/Home/FAQ";


const Home = () => {
  return (
    <div className="bg-blackPrimary text-white">
      <BannerHome />
      <ServideHome />
      <ChooseHome />
      <StartHome/>
      <FAQ/>

    </div>
  );
};

export default Home;

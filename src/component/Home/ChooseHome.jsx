import Container from "../common/Container";
import img1 from "../../assets/quality-icon1.png";
import CardChoose from "./CardChoose";
const ChooseHome = () => {
  return (
    <div className=" py-25">
      <Container>
        <h2 className=" text-3xl  mb-18 font-bold  text-center  ">
          Why Choose Us
        </h2>
        <div className=" pb-70 bg-blackPrimary">
          <div className="relative w-256.25 mx-auto ">
            <div className="absolute top-0 left-0  ">
              <CardChoose
                title="Innovation"
                description="Pushing boundaries in AI, blockchain, and quantitative trading to deliver cutting-edge solutions."
                image={img1}
              />
            </div>
            <div className="absolute top-0 left-58  ">
              <CardChoose
                title="Innovation"
                description="Pushing boundaries in AI, blockchain, and quantitative trading to deliver cutting-edge solutions."
                image={img1}
              />
            </div>
            <div className="absolute top-0 left-116  ">
              <CardChoose
                title="Innovation"
                description="Pushing boundaries in AI, blockchain, and quantitative trading to deliver cutting-edge solutions."
                image={img1}
              />
            </div>
            <div className="absolute top-0 left-174  ">
              <CardChoose
                title="Innovation"
                description="Pushing boundaries in AI, blockchain, and quantitative trading to deliver cutting-edge solutions."
                image={img1}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChooseHome;

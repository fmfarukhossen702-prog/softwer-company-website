import Container from "../common/Container";
import bg from "../../assets/BannerBgg.png";
import robot from "../../assets/robotArea.png";
import Btn from "../common/Btn";
import slider from "../../assets/Companies.png";
const BannerHome = () => {
  return (
    <div className="bg-blackPrimary w-full text-white ">
      <Container className="pt-20">
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="bg-cover bg-no-repeat bg-center py-20"
        >
          <div className="flex items-center justify-between">
            <div className="w-[60%]">
              <div className="w-150 ">
                <h1 className="text-6xl font-bold leading-20 ">
                  Transforming Data into{" "}
                  <span className=" bg-primary rounded-3xl px-2 pb-2 ">
                    Decisions
                  </span>
                </h1>

                <p className="text-xl my-8">
                  Leverage the power of machine learning and AI to unlock
                  insights and drive business growth
                </p>
                <Btn> Book a Meeting</Btn>
                <div className="mt-8.5">
                  <p className="text-sm ">
                    Over 100+ clients have worked with us
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[40%] flex justify-center items-center ">
              <div>
                <img src={robot} alt="Robot" />
              </div>
            </div>
          </div>
        </div>{" "}
        <div
          className="overflow-hidden border-t border-white/10 "
          aria-label="Client companies"
        >
          <div className="company-logo-track flex w-max">
            <img
              className="company-logo-strip"
              src={slider}
              alt="Shopier, Spotify, Zoom, Slack, Amazon, and Adobe"
            />
            <img
              className="company-logo-strip"
              src={slider}
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BannerHome;

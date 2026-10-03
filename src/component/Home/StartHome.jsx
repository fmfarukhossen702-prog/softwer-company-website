import React from "react";
import Container from "../common/Container";
import bg from "../../assets/startNavbar.png";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Btn from "../common/Btn";

const StartHome = () => {
  return (
    <div className="bg-blackPrimary text-white pt-10 pb-30">
      <Container>
        <h3 className="text-3xl font-bold  text-center mb-10 ">
          Why We Started
        </h3>
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="bg-cover bg-no-repeat  bg-center "
        >
          <div className=" flex justify-between items-center gap-5">
            <div className=" w-13 h-13 bg-[#1C1C1C] rounded-full text-3xl flex justify-center items-center text-primary ">
              <FaLongArrowAltLeft />
            </div>

            <div className="flex justify-between  gap-5 text-center pt-20 ">
              <p className="w-85    ">
                We saw businesses drowning in data but struggling to make sense
                of it. Decisions were slow, teams were overwhelmed, and insights
                were buried.
              </p>
              <p className="w-85">
                That’s when we knew there had to be a better way — a smarter,
                faster, more intuitive solution.
              </p>
              <p className="w-85">
                So we built a platform that empowers companies to transform raw
                data into real-time decisions using the power of AI.
              </p>
            </div>

            <div className=" w-13 h-13 bg-[#1C1C1C] rounded-full text-3xl flex justify-center items-center text-primary ">
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>{" "}
        <div className=" text-center pt-6">
          <Btn>Learn More</Btn>
        </div>
      </Container>
    </div>
  );
};

export default StartHome;

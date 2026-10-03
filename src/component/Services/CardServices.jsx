import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const CardServices = ({image,title,discription,firstLi,secentLi,thirdLi,fourLi,fiveLi}) => {
  return (
    <div className=" w-146.5 h-167 rounded-4xl bg-[#141414] py-10.5 px-12.5  ">
      <div className=" flex justify-center ">
        <img src={image} alt="" />
      </div>
      <h3 className=" text-2xl font-semibold  py-8 ">
        {title}
      </h3>
      <p>
       {discription}
      </p>
      <ul className=" list-disc mt-7 marker:text-primary  flex flex-wrap gap-2 justify-between text-sm gap-y-2 ">
        <li> {firstLi}</li>
        <li> {secentLi}</li>
        <li> {thirdLi}</li>
        <li> {fourLi}</li>
        <li> {fiveLi}</li>
      </ul>
      <div className=" border mx-auto mt-8 rounded-3xl border-[#30acee6f] flex justify-center gap-5 items-center w-50 py-4   ">
        <div className=" w-13 h-9 rounded-2xl bg-primary flex justify-center items-center ">
          <FaArrowRightLong  />{" "}
        </div>
        <span>Book a Call</span>
      </div>
    </div>
  );
};

export default CardServices;

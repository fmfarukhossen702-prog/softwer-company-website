import React from 'react'

const CardHome = ({ image, heading, title }) => {
  return (
    <div>
      <div className=" w-94.25 h-120 py-10.5 px-13.5 rounded-[36px] bg-[#141414] ">
        <div className="text-center flex justify-center">
          <div>
            <img src={image} />
          </div>
        </div>
        <h3 className=" text-2xl font-semibold text-center py-5 ">
         {heading}
        </h3>
        <p className = "text-center">
          {title}
        </p>
      </div>
    </div>
  );
}

export default CardHome

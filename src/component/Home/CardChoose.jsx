const CardChoose = ({ title, description, image }) => {
  return (
    <div className=" w-70 h-70 border-10 border-blackPrimary rounded-full bg-[#141414] flex items-center  px-10  ">
      <div>
        <div className="flex justify-center">
          <div>
            <img src={image} alt="Quality Icon" />
          </div>
        </div>
        <h5 className="text-xl font-medium text-center my-4">{title} </h5>
        <p className="text-center text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CardChoose;

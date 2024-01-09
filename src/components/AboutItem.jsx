const AboutItem = ({ name, pledge, text, left }) => {
  return (
    <div
      className={`border-[1px] rounded-md p-6 flex flex-col gap-4 justify-center items-start ${
        left === 0 && "opacity-50"
      }`}
    >
      <div className="flex flex-col gap-4 md:flex-row  w-full justify-between">
        <h2 className="font-bold">{name}</h2>
        <p className="font-medium text-[#3CB4AB]">Pledge ${pledge} or more</p>
      </div>
      <p className="text-gray-500 text-sm leading-6">{text}</p>
      <div className="flex flex-col w-full gap-4 md:flex-row md:justify-between md:items-center">
        <p className="text-gray-500 text-sm">
          <span className="text-2xl font-bold text-black">{left}</span> left
        </p>
        <button
          className={` ${
            left === 0
              ? "bg-gray-300 cursor-default"
              : "bg-[#3CB4AB] lg:hover:bg-[#157A74] lg:hover:shadow-lg duration-200"
          }  text-white font-medium rounded-full py-3 w-fit px-10`}
        >
          {left === 0 ? "Out of Stock" : "Select Reward"}
        </button>
      </div>
    </div>
  );
};

export default AboutItem;

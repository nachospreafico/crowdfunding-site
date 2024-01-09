import { useState } from "react";

const Pledge = ({ pledge, completed, handleComplete }) => {
  const [value, setValue] = useState(5);

  return (
    <div className="border-t-2 w-full pt-4 flex flex-col md:items-center md:flex-row md:justify-between gap-4">
      <p className="text-gray-500 text-sm leading-6 text-center">
        Enter your pledge {!pledge && "(min. $5)"}
      </p>
      <div className="flex flex-row gap-4 ">
        <div className="w-[50%] md:w-full py-2 md:px-4 border-2 gap-2 rounded-full flex flex-row justify-center items-center lg:hover:border-[#3CB4AB] duration-200 cursor-pointer">
          <p>$</p>
          <input
            type="number"
            className="w-10 font-bold text-center "
            placeholder={pledge ? `${pledge}` : ""}
            min={!pledge ? 5 : pledge === "25" ? 25 : 75}
            value={!pledge ? 5 : pledge === "25" ? 25 : 75}
            onChange={(e) => setValue(e.target.value)}
          ></input>
        </div>
        <button
          onClick={handleComplete}
          className="w-[50%] md:w-full bg-[#3CB4AB] md:px-4 font-medium text-white rounded-full lg:hover:bg-[#157A74] lg:hover:shadow-lg duration-200"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Pledge;

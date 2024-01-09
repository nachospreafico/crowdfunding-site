import { useState, useEffect } from "react";

const ProjectStats = () => {
  const [isSmall, setIsSmall] = useState(true);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsSmall(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleWindowSizeChange);

    setIsSmall(window.innerWidth < 768);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const data = [
    { number: "$89,914", text: "of $100,000 backed" },
    {
      number: "5,007",
      text: "total backers",
    },
    { number: "56", text: "days left" },
  ];

  return (
    <div className="bg-white rounded-md border-[1px] relative m-auto max-w-[350px] md:max-w-[700px] py-10 px-6 flex flex-col gap-4">
      <div className="md:grid grid-cols-3">
        <div className={`flex flex-col gap-2 py-4 px-6 `}>
          <p className="text-3xl text-center font-bold">{data[0].number}</p>
          <p className="text-sm text-center">{data[0].text}</p>
        </div>
        <div
          className={`flex flex-col gap-2 py-4 px-6 ${
            isSmall
              ? "border-t-[1px] border-b-[1px]"
              : "border-r-[1px] border-l-[1px]"
          }`}
        >
          <p className="text-3xl text-center font-bold">{data[1].number}</p>
          <p className="text-sm text-center">{data[1].text}</p>
        </div>
        <div className={`flex flex-col gap-2 py-4 px-6 `}>
          <p className="text-3xl text-center font-bold">{data[2].number}</p>
          <p className="text-sm text-center">{data[2].text}</p>
        </div>
      </div>
      {/* Progress bar */}
      <div className="w-full  flex justify-center items-center">
        <div className="w-full bg-gray-200 rounded-full">
          <div className="w-[80%] h-[15px] bg-[#3CB4AB] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStats;

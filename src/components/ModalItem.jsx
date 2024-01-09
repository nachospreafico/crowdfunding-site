import { useState, useEffect } from "react";
import Pledge from "./Pledge";

const ModalItem = ({
  pledge,
  left,
  isLeft,
  name,
  selected,
  onClick,
  completed,
  handleComplete,
}) => {
  const [isSmall, setIsSmall] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

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

  return (
    <div
      className={`border-[1px] rounded-md p-6 flex flex-col gap-4 justify-center items-start ${
        left === 0 && "opacity-50"
      } ${selected && "border-[#3CB4AB] duration-200"}`}
    >
      {isSmall && (
        <>
          <div
            className={`flex flex-row gap-4 items-center`}
            onClick={left === 0 ? null : onClick}
          >
            <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center">
              {selected && (
                <div className="h-4 w-4 bg-[#3CB4AB] rounded-full"></div>
              )}
            </div>
            {pledge ? (
              <div>
                <h2 className="font-bold" onClick={onClick}>
                  {name}
                </h2>
                <p className="font-medium text-[#3CB4AB]">
                  Pledge ${pledge} or more
                </p>
              </div>
            ) : (
              <h2 onClick={onClick} className="font-bold w-fit text-left">
                Pledge with no reward
              </h2>
            )}
          </div>
          <p className="text-gray-500 text-sm leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ex
            id assumenda necessitatibus atque error soluta cum blanditiis saepe
            aperiam.
          </p>
          {isLeft && (
            <p className="text-gray-500 text-sm">
              <span className="text-2xl font-bold text-black">{left}</span> left
            </p>
          )}
          {selected ? (
            pledge === "200" ? (
              <></>
            ) : (
              <Pledge
                pledge={pledge}
                completed={completed}
                handleComplete={handleComplete}
              />
            )
          ) : null}
        </>
      )}
      {!isSmall && (
        <>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-6">
              <div
                className={`cursor-pointer lg:hover:border-[#3CB4AB] ${
                  isHovered && "border-[#3CB4AB]"
                } md:w-10 md:h-6 rounded-full border-[2px] duration-200 flex justify-center items-center`}
              >
                <div
                  onClick={left === 0 ? null : onClick}
                  className={`${
                    selected && "bg-[#3CB4AB]"
                  } w-4 h-4 rounded-full`}
                ></div>
              </div>
              <div className="flex flex-col">
                {pledge ? (
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-4">
                      <h2
                        onClick={left === 0 ? null : onClick}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="font-bold hover:text-[#3CB4AB] duration-200 cursor-pointer"
                      >
                        {name}
                      </h2>
                      <p className="font-medium text-[#3CB4AB]">
                        Pledge ${pledge} or more
                      </p>
                    </div>
                    <p className="text-gray-500 text-sm">
                      <span className="text-2xl font-bold text-black">
                        {left}
                      </span>{" "}
                      left
                    </p>
                  </div>
                ) : (
                  <h2
                    onClick={onClick}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="font-bold hover:text-[#3CB4AB] duration-200 cursor-pointer"
                  >
                    Pledge with no reward
                  </h2>
                )}
                <p className="text-gray-500 text-sm leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur, ex id assumenda necessitatibus atque error soluta cum
                  blanditiis saepe aperiam.
                </p>
              </div>
            </div>
            {selected ? (
              pledge === "200" ? (
                <></>
              ) : (
                <Pledge
                  pledge={pledge}
                  completed={completed}
                  handleComplete={handleComplete}
                />
              )
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

export default ModalItem;

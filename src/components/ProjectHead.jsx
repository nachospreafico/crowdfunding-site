import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mastercraftLogo from "./../assets/images/logo-mastercraft.svg";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const ProjectHead = ({ setModal }) => {
  const [isSmall, setIsSmall] = useState(true);
  const [bookmark, setBookmark] = useState(false);

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
    <div className="bg-white mb-4 rounded-md border-[1px] relative m-auto max-w-[350px] md:max-w-[700px] py-10 px-6 flex flex-col gap-4">
      <img
        className="absolute top-0 translate-y-[-40%] left-[50%] translate-x-[-50%]"
        src={mastercraftLogo}
        alt="mastercraft logo"
      ></img>
      <h1 className="text-2xl font-bold text-center">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="text-gray-500 text-center">
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="flex flex-row gap-2 md:justify-between md:flex">
        <button
          onClick={() => setModal(true)}
          className="bg-[#3CB4AB] md:w-fit md:px-8  text-white font-medium w-full rounded-full py-3 lg:hover:bg-[#157A74] lg:hover:shadow-lg duration-200"
        >
          Back this project
        </button>
        {isSmall ? (
          <div
            onClick={() => setBookmark(!bookmark)}
            className={`flex justify-center items-center w-[50px] h-auto ${
              bookmark ? "bg-[#3CB4AB]" : "bg-[#2F2F2F]"
            }  rounded-full duration-200`}
          >
            <FontAwesomeIcon
              icon={faBookmark}
              className={`${bookmark ? "text-white" : "text-gray-400"}`}
            />
          </div>
        ) : (
          <div
            onClick={() => setBookmark(!bookmark)}
            className={`flex cursor-pointer  flex-row items-center gap-2 bg-gray-200 rounded-full pr-3 group duration-200 lg:hover:bg-[#F4F4F4] lg:hover:shadow-lg`}
          >
            <div
              className={`flex justify-center h-full items-center w-[50px]  ${
                bookmark ? "bg-[#3CB4AB]" : "lg:group-hover:bg-[#707070]"
              } duration-200 bg-[#2F2F2F]  rounded-full`}
            >
              <FontAwesomeIcon
                icon={faBookmark}
                className={` ${
                  bookmark
                    ? "text-white"
                    : "text-gray-400 lg:group-hover:text-gray-200"
                }  duration-200`}
              />
            </div>
            <p
              className={`font-bold  ${
                bookmark
                  ? "text-[#3CB4AB] lg:group-hover:text-[#3CB4AB]"
                  : "text-[#2F2F2F] lg:group-hover:text-[#707070]"
              }  duration-200 `}
            >
              {bookmark ? "Bookmarked" : "Bookmark"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectHead;

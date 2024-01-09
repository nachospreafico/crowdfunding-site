import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { modalData } from "./details";
import { faX } from "@fortawesome/free-solid-svg-icons";
import ModalItem from "./ModalItem";
import { useState } from "react";

const ModalContainer = ({ setModal, completed, handleComplete }) => {
  const [selected, setSelected] = useState(false);

  const handleItemClick = (index) => {
    if (index === selected) {
      setSelected(null); // Deselect if already selected
    } else {
      setSelected(index); // Set the index of the selected item
    }
  };

  return (
    <div className="bg-white rounded-md border-[1px] absolute top-20 z-20 right-[50%] translate-x-[50%] w-full max-w-[350px] md:max-w-[700px] py-10 px-6 flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center">
        <h2 className="font-bold text-lg">Back this project</h2>
        <FontAwesomeIcon
          onClick={() => setModal(false)}
          icon={faX}
          className="lg:hover:text-black duration-200 text-gray-400 cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-4">
        {modalData.map((elem, index) => {
          return (
            <ModalItem
              pledge={elem.pledge}
              key={index}
              left={elem.left}
              isLeft={elem.isLeft}
              name={elem.name}
              selected={selected === index}
              onClick={() => handleItemClick(index)}
              completed={completed}
              handleComplete={handleComplete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ModalContainer;

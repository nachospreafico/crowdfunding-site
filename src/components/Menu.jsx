import React from "react";

const Menu = ({ nav }) => {
  return (
    <nav
      className={`${
        nav ? "fixed" : "hidden"
      } w-max-[350px] w-[90%]  z-10 flex flex-col justify-center items-start bg-white rounded-lg top-16 right-6`}
    >
      <a className="text-black w-full font-medium text-md border-b-[1px] p-4">
        About
      </a>
      <a className="text-black w-full font-medium text-md border-b-[1px] p-4">
        Discover
      </a>
      <a className="text-black w-full font-medium text-md p-4">Get Started</a>
    </nav>
  );
};

export default Menu;

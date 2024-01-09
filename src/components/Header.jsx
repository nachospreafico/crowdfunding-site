import { useState, useEffect } from "react";
import Logo from "./../assets/images/logo.svg";
import bgMobile from "./../assets/images/image-hero-mobile.jpg";
import bgDesktop from "./../assets/images/image-hero-desktop.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

const Header = () => {
  const [isSmall, setIsSmall] = useState(true);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsSmall(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleWindowSizeChange);

    setIsSmall(window.innerWidth < 640);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <header>
      {isSmall && (
        <div className="relative flex flex-row justify-between p-6">
          <img
            src={bgMobile}
            alt="hero image for mobiles"
            className="absolute object-cover z-[-1] top-0 left-0"
          ></img>
          <img src={Logo} alt="logo" className="z-10"></img>
          <FontAwesomeIcon
            icon={nav ? faX : faBars}
            onClick={handleNav}
            className={`text-white ${
              nav ? "fixed" : "absolute"
            } right-6 top-6 z-10`}
            size="lg"
          />
          <Menu nav={nav} />
          {/* Menu overlay */}
          <div
            onClick={() => setNav(false)}
            className={`${
              nav ? "fixed" : "hidden"
            } bg-gradient-to-b from-black to-white opacity-50 h-screen w-screen top-0 left-0 z-[9]`}
          ></div>
        </div>
      )}
      {!isSmall && (
        <div className="relative flex flex-row justify-between sm:px-[40px] sm:py-4 md:px-[80px] md:py-8 lg:px-[165px] lg:py-10">
          <img
            src={bgDesktop}
            alt="hero image for mobiles"
            className="absolute object-cover z-[-1] top-0 left-0"
          ></img>
          <img src={Logo} alt="logo" className=""></img>
          <nav className="flex flex-row gap-6 justify-center items-center">
            <a className="text-white text-sm cursor-pointer">About</a>
            <a className="text-white text-sm cursor-pointer">Discover</a>
            <a className="text-white text-sm cursor-pointer">Get Started</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

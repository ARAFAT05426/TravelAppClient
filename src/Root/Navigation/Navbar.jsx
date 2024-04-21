import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/Resources/logo.png";
import "./Navbar.css";

const Navbar = () => {
  // State for controlling mobile menu visibility
  const [act, setAct] = useState(false);

  // JSX for navigation links
  const links = (
    <>
      <NavLink to={"/"} className="cBtn">
        Home
      </NavLink>
      <NavLink to={"/about"} className="cBtn">
        About
      </NavLink>
      <NavLink to={"/contact"} className="cBtn">
        Contact
      </NavLink>
    </>
  );

  return (
    <nav id="navBar" className="bg-white/35 h-20 backdrop:blur-2xl px-2 md:px-16 lg:px-28 shadow-xl">
      {/* Left Area */}
      <div className="">
      <img className="w-12 lg:w-[4.5rem]" src={logo} alt="" />
      </div>
      {/* Center Area */}
      <div className="relative font-semibold">
        <div className="hidden lg:flex gap-4">{links}</div>
        {/* Small device links */}
        <div id="smallDeviceLinks" className={`flex lg:hidden bg-white/35 backdrop:blur-2xl mt-6 ${act ? "h-[50vh] pt-7" : "h-0"}`}>
          {links}
        </div>
      </div>
      {/* Right Area */}
      <div className="flex items-center">
        <div>Search/Login/Anything_Area</div>
        {/* Toggle Button */}
        <div id="toggle" className="flex lg:hidden" onClick={() => setAct(!act)}>
          <div id="toggleBars" className={`${act ? "open" : ""}`}>
            <span className="bg-[#D35623]"></span>
            <span className="bg-[#D35623]"></span>
            <span className="bg-[#D35623]"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

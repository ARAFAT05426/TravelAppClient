import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import logo from "/Resources/logo.png";
import "./Navbar.css";
import Swal from "sweetalert2";
import useCallContext from "../Hooks/useCallContext";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  // State for controlling mobile menu visibility
  const { user, signOutUSer } = useCallContext();
  const [act, setAct] = useState(false);
  // JSX for navigation links
  const links = (
    <>
      <NavLink to={"/"} className="cBtn">
        Home
      </NavLink>
      <NavLink to={"/allTouristSpots"} className="cBtn">
        All TouristSpots
      </NavLink>
      <NavLink to={"/addSpots"} className="cBtn">
        Add Spots
      </NavLink>
      <NavLink to={"/myList"} className={`cBtn`}>
        My list
      </NavLink>
      <NavLink to={"/about"} className="cBtn">
        About
      </NavLink>
      <NavLink to={"/contact"} className="cBtn">
        Contact
      </NavLink>
    </>
  );
  const handleLogOut = () => {
    signOutUSer();
    return Swal.fire({
      background: "#CDD4DB",
      title: `Signed Out! ${user?.displayName}`,
      text: "We`ll be here when you`re ready to return!",
      icon: "success",
    });
  };
  return (
    <nav
      id="navBar"
      className="bg-nav_bg h-16 backdrop:blur-2xl px-2 md:px-16 lg:px-28 shadow-xl z-50"
    >
      {/* Left Area */}
      <div className="">
        <Link to={"/"}>
          <img className="w-28" src={logo} alt="" />
        </Link>
      </div>
      {/* Center Area */}
      <div className="relative font-semibold">
        <div className="hidden lg:flex gap-4">{links}</div>
        {/* Small device links */}
        <div
          id="smallDeviceLinks"
          className={`flex lg:hidden bg-white/45 backdrop-blur-xl mt-8 ${
            act ? "h-[50vh] pt-7" : "h-0"
          }`}
        >
          {links}
        </div>
      </div>
      {/* Right Area */}
      <div className="flex items-center">
        <div>
          {user?.photoURL ? (
            <>
              <button
                data-tooltip-id="userName"
                data-tooltip-content={user?.displayName}
                onClick={handleLogOut}
                className="px-3 py-1 h-12 bg-btn_bg flex items-center gap-1 font-semibold text-xl rounded"
              >
                <img
                  className="w-14 rounded-full p-3"
                  onError={(e) => {
                    e.target.src = "https://i.ibb.co/nDMvB3b/image-Errr.gif";
                  }}
                  src={user?.photoURL}
                  alt=""
                />
                Log Out
              </button>
              <Tooltip
                style={{ background: "#446680" }}
                id="userName"
                place="left-start"
              />
            </>
          ) : (
            <Link
              to={"/logIn"}
              className="px-3 py-1 bg-btn_bg flex items-center gap-1 font-semibold text-xl rounded"
            >
              <BiUserCircle className="text-4xl" />
              Log In
            </Link>
          )}
        </div>
        {/* Toggle Button */}
        <div
          id="toggle"
          className="flex lg:hidden"
          onClick={() => setAct(!act)}
        >
          <div id="toggleBars" className={`${act ? "open" : ""}`}>
            <span className="bg-btn_bg"></span>
            <span className="bg-btn_bg"></span>
            <span className="bg-btn_bg"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

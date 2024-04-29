import{ useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import logo from "/Resources/logo.png";
import "./Navbar.css";
import Swal from "sweetalert2";
import useCallContext from "../Hooks/useCallContext";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, signOutUSer } = useCallContext();
  const [act, setAct] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

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
      {
        user?.displayName ? 
        <NavLink to={"/myList"} className={`cBtn`}>
        My list
      </NavLink> :
      ""
      }
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
      <div className="flex items-center gap-1 lg:gap-4">
        <label className="swap swap-rotate">
          <input
            onChange={handleToggle}
            type="checkbox"
            className="theme-controller"
            value="synthwave"
            checked={theme === "dark"}
          />
          <svg
            className={`swap-off fill-current w-10 h-10 ${
              theme === "dark" ? "hidden" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className={`swap-on fill-current w-10 h-10 ${
              theme === "light" ? "hidden" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
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

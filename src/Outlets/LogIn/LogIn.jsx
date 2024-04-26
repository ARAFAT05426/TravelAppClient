import Lottie from "lottie-react";
import logIn from "./logIn.json";
import logo from "/Resources/logo.png";
import { CiLogin } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
const LogIn = () => {
  return (
    <section className="px-28 grid grid-cols-2 gap-4">
      <Lottie animationData={logIn} />
      <div className="h-4/5 my-auto bg-white/40 backdrop:blur-3xl px-20 py-10 rounded-lg space-y-3">
        <img className="w-1/4 mx-auto" src={logo} alt="" />
        <form id="logIn" className="space-y-4">
          <div className="flex flex-col space-y-2 text-nav_bg">
            <h1 className="font-semibold text-xl text-nav_bg">Email</h1>
            <input
              className="p-5 rounded outline-none border border-nav_bg"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col space-y-2 text-nav_bg">
            <h1 className="font-semibold text-xl text-nav_bg">Password</h1>
            <input
              className="p-5 rounded outline-none border border-nav_bg"
              type="password"
              placeholder="Enter your email"
            />
          </div>
        </form>
        <button className="w-full bg-btn_bg px-5 py-3 rounded-md text-xl font-bold flex items-center gap-1 justify-center">
          {" "}
          <CiLogin className="text-3xl" /> Log In
        </button>
        {/* Divider */}
        <div className="text-nav_bg text-center flex items-center gap-3 ">
          <hr className="w-full opacity-75 border-nav_bg rounded" />{" "}
          <span className=" text-nav_bg w-fit text-nowrap font-bold opacity-65">
            or Use
          </span>{" "}
          <hr className="w-full opacity-75 border-nav_bg rounded" />
        </div>
        {/* Social-Login */}
        <div className="flex justify-around items-center">
          <button className="flex items-center w-2/5 mx-auto justify-center text-3xl gap-1 font-semibold text-nav_bg px-5 py-3 border border-nav_bg rounded-md">
            <FcGoogle className="text-5xl" />
            Google
          </button>
          <button className="flex items-center w-2/5 mx-auto justify-center text-3xl gap-1 font-semibold text-nav_bg px-5 py-3 border border-nav_bg rounded-md">
            <FaSquareGithub className="text-5xl text-nav_bg" />
            Github
          </button>
        </div>
        <p className="font-semibold text-nav_bg text-center">Dont have an account yet? <Link className="text-blue-700 font-bold" to={'/signUp'}>Sign Up</Link> </p>
      </div>
    </section>
  );
};

export default LogIn;

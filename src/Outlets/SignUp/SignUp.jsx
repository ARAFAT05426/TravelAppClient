import Lottie from "lottie-react";
import signUp from "./SignUp.json";
import logo from "/Resources/logo.png";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useContext } from "react";
import authContext from "../../Hooks/authContext";

const SignUp = () => {
  const {name} = useContext(authContext);
  console.log(name);
  return (
    <section className="px-28 grid grid-cols-2 gap-4">
      <div className="h-4/5 my-auto bg-white/40 backdrop:blur-3xl px-20 py-14 rounded-lg space-y-4">
        <img className="w-1/4 mx-auto" src={logo} alt="" />
        <form id="logIn" className="space-y-4">
          <div className="flex flex-col space-y-2 text-nav_bg">
            <h1 className="font-semibold text-xl text-nav_bg">Name</h1>
            <input
              className="p-5 rounded outline-none border border-nav_bg"
              type="text"
              placeholder="Enter your email"
            />
          </div>
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
        <p className="font-semibold text-nav_bg text-center">
          Already have an account?{" "}
          <Link className="text-blue-700 font-bold" to={"/logIn"}>
            LogIn
          </Link>{" "}
        </p>
      </div>
      <Lottie animationData={signUp} />
    </section>
  );
};

export default SignUp;

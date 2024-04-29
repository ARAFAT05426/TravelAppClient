import Lottie from "lottie-react";
import logIn from "./logIn.json";
import logo from "/Resources/logo.png";
import { CiLogin } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaSquareGithub } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useCallContext from "../../Hooks/useCallContext";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
const LogIn = () => {
  const [toggle, setToggle] = useState(false);
  const { signUser, signUserWithGoogle, signUserWithGithub } = useCallContext();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    const { email, password } = data;
    signUser(email, password)
      .then(() => {
        Swal.fire({
          background: "#CDD4DB",
          title: `Welcome Back To KlickTrips`,
          text: "Let`s roll ",
          icon: "success",
        });
        navigate(location?.state || "/");
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
        return Swal.fire({
          background: "#CDD4DB",
          title: `Kindly provide valid email & password`,
          text: "Try again",
          icon: "warning",
        });
      });
  };
  const handleSocialSignIn = (method) => {
    method()
      .then(() => {
        navigate(location?.state || "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="px-4 lg:px-28 flex flex-col lg:flex-row-reverse gap-4 justify-center min-h-[calc(100vh-64px)]">
      <Lottie animationData={logIn} />
      <div className="h-fit lg:h-4/5 w-full lg:w-1/2 my-auto bg-white/40 backdrop:blur-3xl px-5 lg:px-20 py-10 rounded-lg space-y-3">
        <img className="w-1/4 mx-auto" src={logo} alt="" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="logIn"
          className="space-y-4"
        >
          <div className="flex flex-col space-y-2 text-nav_bg">
            <h1 className="font-semibold text-xl text-nav_bg">Email</h1>
            <input
              className="p-5 bg-white/80 rounded outline-none border border-nav_bg"
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col space-y-2 text-nav_bg">
            <h1 className="font-semibold text-xl text-nav_bg">Password</h1>
            <div className="flex items-center bg-white/80 border text-nav_bg border-nav_bg w-full p-1 rounded">
              <input
                className="p-4 bg-white/80 grow rounded text-nav_bg outline-none"
                {...register("password", { required: true })}
                type={toggle ? "text" : "password"}
                placeholder="Enter your email"
              />
              <span
                onClick={() => setToggle(!toggle)}
                className="bg-nav_bg p-2 rounded-full cursor-pointer mr-2"
              >
                {toggle ? (
                  <FaEye className="text-xl" />
                ) : (
                  <FaEyeSlash className="text-xl" />
                )}
              </span>
            </div>
            {errors?.password && <span>{errors?.password?.message}</span>}
          </div>
        </form>
        <button
          form="logIn"
          className="w-full bg-btn_bg px-5 py-3 rounded-md text-xl font-bold flex items-center gap-1 justify-center"
        >
          {" "}
          <CiLogin className="text-3xl" /> Log In
        </button>
        <div className="text-nav_bg text-center flex items-center gap-3 ">
          <hr className="w-full opacity-75 border-nav_bg rounded" />{" "}
          <span className=" text-nav_bg w-fit text-nowrap font-bold opacity-65">
            or Use
          </span>{" "}
          <hr className="w-full opacity-75 border-nav_bg rounded" />
        </div>
        {/* Social-Login */}
        <div className="flex justify-around items-center">
          <button
            onClick={() => handleSocialSignIn(signUserWithGoogle)}
            className="flex items-center w-2/5 mx-auto justify-center text-xl lg:text-3xl gap-1 font-semibold text-nav_bg px-5 py-3 border border-nav_bg rounded-md"
          >
            <FcGoogle className="text-5xl" />
            Google
          </button>
          <button
            onClick={() => handleSocialSignIn(signUserWithGithub)}
            className="flex items-center w-2/5 mx-auto justify-center text-xl lg:text-3xl gap-1 font-semibold text-nav_bg px-5 py-3 border border-nav_bg rounded-md"
          >
            <FaSquareGithub className="text-5xl text-nav_bg" />
            Github
          </button>
        </div>
        <p className="font-semibold text-nav_bg text-center">
          Dont have an account yet?{" "}
          <Link className="text-blue-700 font-bold" to={"/signUp"}>
            Sign Up
          </Link>{" "}
        </p>
      </div>
    </section>
  );
};

export default LogIn;

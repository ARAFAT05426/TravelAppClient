import Lottie from "lottie-react";
import signUp from "./SignUp.json";
import logo from "/Resources/logo.png";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import useCallContext from "../../Hooks/useCallContext";
import { useState } from "react";
import Swal from "sweetalert2";

const SignUp = () => {
  const [toggle, setToggle] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, createUser, updateUser } = useCallContext();
  const onSubmit = (data, e) => {
    const { name, email, password, url } = data;
    const passValue = data.password;
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(passValue)) {
      return alert("Error passWord");
    }
    createUser(email, password)
      .then(() => {
        Swal.fire({
          background: "#CDD4DB",
          title: `Welcome ${user?.displayName}`,
          text: "Let`s roll",
          icon: "success",
        });
        e.target.reset();
        updateUser(name, url);
      })
      .then((errors) => {
        console.log(errors);
      });
  };
  return (
    <section className="px-28 grid grid-cols-2 gap-4">
      <div className="h-5/6 my-auto bg-white/40 backdrop:blur-3xl px-20 py-5 rounded-lg space-y-2">
        <img className="w-1/4 mx-auto" src={logo} alt="" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="signUp"
          className="space-y-4"
        >
          <div className="flex flex-col space-y-2 text-nav_bg">
            <h1 className="font-semibold text-xl text-nav_bg">Name</h1>
            <input
              className="p-5 rounded outline-none border border-nav_bg"
              {...register("name", { required: true })}
              type="text"
              placeholder="Enter your email"
            />
            {errors?.name && <span>{errors?.name?.message}</span>}
          </div>
          <div className="flex flex-col space-y-2 text-nav_bg">
            <h1 className="font-semibold text-xl text-nav_bg">Email</h1>
            <input
              className="p-5 rounded outline-none border border-nav_bg"
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter your email"
            />
            {errors.email && <span>{errors?.email?.message}</span>}
          </div>
          <div className="flex flex-col space-y-2 text-nav_bg">
            <h1 className="font-semibold text-xl text-nav_bg">Password</h1>
            <div className="flex items-center bg-white border text-nav_bg border-nav_bg w-full p-1 rounded">
              <input
                className="p-4 grow rounded text-nav_bg outline-none"
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
          <div className="flex flex-col space-y-2 text-nav_bg">
            <h1 className="font-semibold text-xl text-nav_bg">Url</h1>
            <input
              className="p-5 rounded outline-none border border-nav_bg"
              {...register("url")}
              type="url"
              placeholder="Enter profile-image url..."
            />
            {errors?.url && <span>{errors?.url?.message}</span>}
          </div>
        </form>
        <button
          form="signUp"
          className="w-full bg-btn_bg px-5 py-3 rounded-md text-xl font-bold flex items-center gap-1 justify-center"
        >
          {" "}
          <CiLogin className="text-3xl" /> Log In
        </button>
        <p className="font-semibold text-nav_bg text-center">
          Already have an account?{" "}
          <Link className="text-blue-700 font-bold" to={"/logIn"}>
            LogIn
          </Link>
        </p>
      </div>
      <Lottie animationData={signUp} />
    </section>
  );
};

export default SignUp;

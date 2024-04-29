import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useCallContext from "../Hooks/useCallContext";
const Add_Spots = () => {
  const [isHovered, setIsHovered] = useState(false);
  const {user} = useCallContext()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    fetch(`https://assignment-10-plum.vercel.app/spots`, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((dt) => {
        console.log(dt);
        e.target.reset()
        return Swal.fire({
          background: "#CDD4DB",
          title: `Tourist Spot Added`,
          text: "Let`s Add More ",
          icon: "success",
        });
      });
  };
  return (
    <section className="min-h-[calc(100vh-64px)] px-2 lg:px-28 py-10">
      <Link
        to={"/"}
        className={`px-5 py-3 ${
          isHovered ? "text-nav_bg" : "bg-btn_bg "
        } flex items-center w-fit gap-1 font-semibold rounded-sm transition-all`}
      >
        Back to home
      </Link>
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="px-3 lg:px-24 py-14 bg-white/40 backdrop-blur-3xl mt-5 rounded space-y-3"
      >
        <div>
          <h1 className="text-5xl text-center text-nav_bg font-bold">
            Add New
            <span
              className="font-medium ml-3 text-btn_bg italic"
              style={{ fontFamily: '"Tourney", sans-serif' }}
            >
              Tourists
            </span>
            <br /> Spots
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-x-6 lg:gap-x-16 gap-y-5 w-full"
          id="addSpots"
        >
          <div className="space-y-2">
            <h1 className="text-sm lg:text-xl font-semibold ml-1 text-nav_bg">
              User Name :
            </h1>
            <input
              className="px-5 py-3 text-xs bg-white/80 lg:text-lg w-full rounded border border-nav_bg outline-none text-nav_bg"
              {...register("name", { required: true })}
              placeholder="Enter user name"
              type="text"
            />
            {errors.name && (
              <span className="text-red-500">User Name is required</span>
            )}
          </div>
          <div className="space-y-2">
            <h1 className="text-sm lg:text-xl font-semibold ml-1 text-nav_bg">
              User Email :
            </h1>
            <input
              className="px-5 py-3 text-xs bg-white/80 lg:text-lg w-full rounded border border-nav_bg outline-none text-nav_bg"
              {...register("email", { required: true })}
              placeholder="Enter user email"
              defaultValue={user?.email}
              type="email"
            />
            {errors.email && (
              <span className="text-red-500">User Email is required</span>
            )}
          </div>
          <div className="space-y-2">
            <h1 className="text-sm lg:text-xl font-semibold ml-1 text-nav_bg">
              Tourists Spot Name :
            </h1>
            <input
              className="px-5 py-3 text-xs bg-white/80 lg:text-lg w-full rounded border border-nav_bg outline-none text-nav_bg"
              {...register("spot_Name", { required: true })}
              placeholder="Enter tourists spot name"
              type="text"
            />
            {errors.average_cost && (
              <span className="text-red-500">Average cost is required</span>
            )}
          </div>
          <div className="space-y-2">
            <h1 className="text-sm lg:text-xl font-semibold ml-1 text-nav_bg">
              Country Name :
            </h1>
            <select
              className="px-5 py-3 text-xs bg-white/80 lg:text-lg w-full rounded border border-nav_bg outline-none text-nav_bg"
              {...register("cName", { required: true })}
            >
              <option className="text-nav_bg" value="">Select country</option>
              <option className="text-nav_bg" value="bangladesh">Bangladesh</option>
              <option className="text-nav_bg" value="cambodia">Cambodia</option>
              <option className="text-nav_bg" value="indonesia">Indonesia</option>
              <option className="text-nav_bg" value="malaysia">Malaysia</option>
              <option className="text-nav_bg" value="thailand">Thailand</option>
              <option className="text-nav_bg" value="vietnam">Vietnam</option>
            </select>
            {errors.cName && (
              <span className="text-red-500">Country Name is required</span>
            )}
          </div>
          <div className="space-y-2">
            <h1 className="text-sm lg:text-xl font-semibold ml-1 text-nav_bg">
              Location :
            </h1>
            <input
              className="px-5 py-3 text-xs bg-white/80 lg:text-lg w-full rounded border border-nav_bg outline-none text-nav_bg"
              {...register("location", { required: true })}
              placeholder="Enter location"
              type="text"
            />
            {errors.location && (
              <span className="text-red-500">Location is required</span>
            )}
          </div>
          <div className="space-y-2">
            <h1 className="text-sm lg:text-xl font-semibold ml-1 text-nav_bg">
              Seasonality :
            </h1>
            <input
              className="px-5 py-3 text-xs bg-white/80 lg:text-lg w-full rounded border border-nav_bg outline-none text-nav_bg"
              {...register("seasonality", { required: true })}
              placeholder="Enter seasonality"
              type="text"
            />
            {errors.cost && (
              <span className="text-red-500">Seasonality is required</span>
            )}
          </div>
          <div className="space-y-2">
            <h1 className="text-sm lg:text-xl font-semibold ml-1 text-nav_bg">
              Total Visitors Per Year :
            </h1>
            <input
              className="px-5 py-3 text-xs bg-white/80 lg:text-lg w-full rounded border border-nav_bg outline-none text-nav_bg"
              {...register("visitor", { required: true })}
              placeholder="Enter total visitors per year"
              type="text"
            />
            {errors.cost && (
              <span className="text-red-500">
                Total Visitors Per Year is required
              </span>
            )}
          </div>
          <div className="space-y-2">
            <h1 className="text-sm lg:text-xl font-semibold ml-1 text-nav_bg">
              Travel Time :
            </h1>
            <input
              className="px-5 py-3 text-xs bg-white/80 lg:text-lg w-full rounded border border-nav_bg outline-none text-nav_bg"
              {...register("timing", { required: true })}
              placeholder="Enter travel time"
              type="text"
            />
            {errors.cost && (
              <span className="text-red-500">Travel Time is required</span>
            )}
          </div>
          <div className="space-y-2">
            <h1 className="text-sm lg:text-xl font-semibold ml-1 text-nav_bg">
              Average Cost:
            </h1>
            <input
              className="px-5 py-3 text-xs bg-white/80 lg:text-lg w-full rounded border border-nav_bg outline-none text-nav_bg"
              {...register("cost", { required: true })}
              placeholder="Enter average cost"
              type="number"
            />
            {errors.cost && (
              <span className="text-red-500">Average Cost is required</span>
            )}
          </div>
          <div className="space-y-2">
            <h1 className="text-sm lg:text-xl font-semibold ml-1 text-nav_bg">
              Image (URL):
            </h1>
            <input
              className="px-5 py-3 text-xs bg-white/80 lg:text-lg w-full rounded border border-nav_bg outline-none text-nav_bg"
              {...register("url", { required: true })}
              placeholder="Enter image (URL..)"
              type="url"
            />
            {errors.cost && (
              <span className="text-red-500">Image (URL) is required</span>
            )}
          </div>
          <div className="space-y-2 col-span-2">
            <h1 className="text-sm lg:text-xl font-semibold ml-1 text-nav_bg">
              Short Description:
            </h1>
            <textarea
              className="px-5 py-3 text-xs bg-white/80 lg:text-lg w-full rounded border border-nav_bg outline-none text-nav_bg"
              {...register("description", { required: true })}
              placeholder="Enter short description"
              rows="3"
            ></textarea>

            {errors.cost && (
              <span className="text-red-500">
                Short Description is required
              </span>
            )}
          </div>
        </form>
        <button
          form="addSpots"
          className="bg-btn_bg w-full px-5 py-3 text-2xl font-bold rounded"
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default Add_Spots;

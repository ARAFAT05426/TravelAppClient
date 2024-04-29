import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
    const oldData = useLoaderData();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    fetch(`https://assignment-10-plum.vercel.app/spots/${oldData?._id}`, {
        method: 'PUT',
        headers: {
            'Content-type':'Application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(() =>{
        e.target.reset()
        Swal.fire({
          background: "#CDD4DB",
          title: "Spot Details Updated!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        navigate(-1)
    })
  };
  return (
    <section className="px-2 lg:px-28 py-10">
      <div className="pb-7 text-3xl lg:text-6xl font-semibold text-center">
        <h1>Let`s Update {oldData?.spot_Name}</h1>
      </div>
      <div className="space-y-3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-x-6 lg:gap-x-16 gap-y-5 w-full"
          id="addSpots"
        >
          <div className="space-y-2 w-full">
            <h1 className="text-sm lg:text-xl font-semibold ml-1 text-nav_bg">
              Tourists Spot Name :
            </h1>
            <input
              className="px-5 py-3 text-xs bg-white/80 lg:text-lg w-full rounded border border-nav_bg outline-none text-nav_bg"
              {...register("spot_Name", { required: true })}
              placeholder={oldData?.spot_Name}
              type="text"
            />
            {errors.average_cost && (
              <span className="text-red-500">Average cost is required</span>
            )}
          </div>
          <div className="space-y-2 w-full">
            <h1 className="text-sm lg:text-xl font-semibold ml-1 text-nav_bg">
              Country Name :
            </h1>
            <select
              className="px-5 py-3 text-xs bg-white/80 lg:text-lg w-full rounded border border-nav_bg outline-none text-nav_bg"
              {...register("cName", { required: true })}
            >
              <option className="text-nav_bg" value="">
                Select Country
              </option>
              <option className="text-nav_bg" value="bangladesh">
                Bangladesh
              </option>
              <option className="text-nav_bg" value="cambodia">
                Cambodia
              </option>
              <option className="text-nav_bg" value="malaysia">
                Malaysia
              </option>
              <option className="text-nav_bg" value="thailand">
                Thailand
              </option>
              <option className="text-nav_bg" value="vietnam">
                Vietnam
              </option>
            </select>
            {errors.cName && (
              <span className="text-red-500">Country Name is required</span>
            )}
          </div>
          <div className="space-y-2 w-full">
            <h1 className="text-sm lg:text-xl font-semibold ml-1 text-nav_bg">
              Location :
            </h1>
            <input
              className="px-5 py-3 text-xs bg-white/80 lg:text-lg w-full rounded border border-nav_bg outline-none text-nav_bg"
              {...register("location", { required: true })}
              placeholder={oldData?.location}
              type="text"
            />
            {errors.location && (
              <span className="text-red-500">Location is required</span>
            )}
          </div>
          <div className="space-y-2 w-full">
            <h1 className="text-sm lg:text-xl font-semibold ml-1 text-nav_bg">
              Seasonality :
            </h1>
            <input
              className="px-5 py-3 text-xs bg-white/80 lg:text-lg w-full rounded border border-nav_bg outline-none text-nav_bg"
              {...register("seasonality", { required: true })}
              placeholder={oldData?.seasonality}
              type="text"
            />
            {errors.cost && (
              <span className="text-red-500">Seasonality is required</span>
            )}
          </div>
          <div className="space-y-2 w-full">
            <h1 className="text-sm lg:text-xl font-semibold ml-1 text-nav_bg">
              Total Visitors Per Year :
            </h1>
            <input
              className="px-5 py-3 text-xs bg-white/80 lg:text-lg w-full rounded border border-nav_bg outline-none text-nav_bg"
              {...register("visitor", { required: true })}
              placeholder={oldData?.visitor}
              type="text"
            />
            {errors.cost && (
              <span className="text-red-500">
                Total Visitors Per Year is required
              </span>
            )}
          </div>
          <div className="space-y-2 w-full">
            <h1 className="text-sm lg:text-xl font-semibold ml-1 text-nav_bg">
              Travel Time :
            </h1>
            <input
              className="px-5 py-3 text-xs bg-white/80 lg:text-lg w-full rounded border border-nav_bg outline-none text-nav_bg"
              {...register("timing", { required: true })}
              placeholder={oldData?.timing}
              type="text"
            />
            {errors.cost && (
              <span className="text-red-500">Travel Time is required</span>
            )}
          </div>
          <div className="space-y-2 w-full">
            <h1 className="text-sm lg:text-xl font-semibold ml-1 text-nav_bg">
              Average Cost:
            </h1>
            <input
              className="px-5 py-3 text-xs bg-white/80 lg:text-lg w-full rounded border border-nav_bg outline-none text-nav_bg"
              {...register("cost", { required: true })}
              placeholder={oldData?.cost}
              type="number"
            />
            {errors.cost && (
              <span className="text-red-500">Average Cost is required</span>
            )}
          </div>
          <div className="space-y-2 w-full">
            <h1 className="text-sm lg:text-xl font-semibold ml-1 text-nav_bg">
              Image (URL):
            </h1>
            <input
              className="px-5 py-3 text-xs bg-white/80 lg:text-lg w-full rounded border border-nav_bg outline-none text-nav_bg"
              {...register("url", { required: true })}
              placeholder={oldData?.url}
              type="url"
            />
            {errors.cost && (
              <span className="text-red-500">Image (URL) is required</span>
            )}
          </div>
          <div className="space-y-2 w-full col-span-2">
            <h1 className="text-sm lg:text-xl font-semibold ml-1 text-nav_bg">
              Short Description:
            </h1>
            <textarea
              className="px-5 py-3 text-xs bg-white/80 lg:text-lg w-full rounded border border-nav_bg outline-none text-nav_bg"
              {...register("description", { required: true })}
              placeholder={oldData?.description}
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
          Update
        </button>
      </div>
    </section>
  );
};

export default UpdateSpot;

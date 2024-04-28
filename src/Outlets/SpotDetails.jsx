import { CiLocationOn } from "react-icons/ci";
import { FaRegFlag } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { MdOutlineTimer } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { useLoaderData } from "react-router-dom";

const SpotDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <section className="p-5 mx-auto sm:p-10 md:p-16 text-gray-800">
      <div className="flex flex-col max-w-6xl mx-auto overflow-hidden rounded">
        <img
          src={data?.url}
          alt=""
          className="w-full h-60 sm:h-96 bg-gray-500"
        />
        <div className="p-6 pb-12 mx-auto -mt-16 space-y-6 sm:px-10 w-[95%] lg:rounded-md bg-gray-200">
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl text-nav_bg font-semibold sm:text-3xl"
              >
                {data?.spot_Name}
              </a>
              <p className="text-xs text-nav_bg font-bold">
                By
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs text-nav_bg hover:underline ml-1"
                >
                  {data?.name}
                </a>
              </p>
            </div>
            <div className="px-5 py-3 bg-btn_bg rounded flex items-center gap-2">
              <h1 className="font-extrabold text-2xl">$ {data?.cost}</h1>
              <span className="text-xs">
                <del>{parseInt(data?.cost) + 20}</del>
              </span>
            </div>
          </div>
          <div className="flex px-1 lg:px-5 flex-wrap gap-3 items-center w-fit">
            <h1 className="flex items-center text-xs gap-1 text-nav_bg">
              <button className="bg-btn_bg p-1 lg:p-[6px] rounded-full"><FaRegFlag className="" /></button>
              {data?.cName}
            </h1>
            <h1 className="flex items-center text-xs gap-1 text-nav_bg">
              <button className="bg-btn_bg p-1 lg:p-[6px] rounded-full"><CiLocationOn className="" /></button>
              {data?.location}
            </h1>
            <h1 className="flex items-center text-xs gap-1 text-nav_bg">
              <button className="bg-btn_bg p-1 lg:p-[6px] rounded-full"><GoPeople className="" /></button>
              {data?.visitor}
            </h1>
            <h1 className="flex items-center text-xs gap-1 text-nav_bg">
              <button className="bg-btn_bg p-1 lg:p-[6px] rounded-full"><SlCalender className="" /></button>
              {data?.seasonality}
            </h1>
            <h1 className="flex items-center text-xs gap-1 text-nav_bg">
              <button className="bg-btn_bg p-1 lg:p-[6px] rounded-full"><MdOutlineTimer className="" /></button>
              {data?.timing}
            </h1>
          </div>
          <hr className="border-btn_bg" />
          <div className="text-gray-800">
            <p className="text-nav_bg">{data?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotDetails;

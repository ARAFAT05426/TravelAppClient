import { CiLocationOn } from "react-icons/ci";
import { FaRegFlag } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { MdOutlineTimer } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { useLoaderData } from "react-router-dom";

const SpotDetails = () => {
  const data = useLoaderData();
  return (
    <section className="p-5 mx-auto sm:p-10 md:p-16 text-gray-800">
      <div className="flex flex-col max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg">
        <img
          src={data?.url}
          alt=""
          className="w-full h-60 sm:h-96 object-cover rounded-t-lg"
        />
        <div className="p-6 pb-12 mx-auto -mt-16 space-y-6 sm:px-10 w-full lg:w-[95%] lg:rounded-md bg-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-3xl font-semibold text-gray-800 hover:text-nav_bg transition duration-300"
              >
                {data?.spot_Name}
              </a>
              <p className="text-sm text-center lg:text-left font-bold text-gray-600">
                By
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-sm text-nav_bg hover:underline ml-1 transition duration-300"
                >
                  {data?.name}
                </a>
              </p>
            </div>
            <div className="px-5 py-3 bg-btn_bg rounded-lg flex items-center gap-2">
              <h1 className="font-extrabold text-xl text-white">${data?.cost}</h1>
              <span className="text-xs">per day</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 items-center">
            <div className="flex items-center text-xs gap-1 text-gray-800">
              <button className="bg-btn_bg p-1 lg:p-[6px] rounded-full"><FaRegFlag className="text-white" /></button>
              {data?.cName}
            </div>
            <div className="flex items-center text-xs gap-1 text-gray-800">
              <button className="bg-btn_bg p-1 lg:p-[6px] rounded-full"><CiLocationOn className="text-white" /></button>
              {data?.location}
            </div>
            <div className="flex items-center text-xs gap-1 text-gray-800">
              <button className="bg-btn_bg p-1 lg:p-[6px] rounded-full"><GoPeople className="text-white" /></button>
              {data?.visitor} per year
            </div>
            <div className="flex items-center text-xs gap-1 text-gray-800">
              <button className="bg-btn_bg p-1 lg:p-[6px] rounded-full"><SlCalender className="text-white" /></button>
              {data?.seasonality}
            </div>
            <div className="flex items-center text-xs gap-1 text-gray-800">
              <button className="bg-btn_bg p-1 lg:p-[6px] rounded-full"><MdOutlineTimer className="text-white" /></button>
              {data?.timing} days
            </div>
          </div>
          <hr className="border-btn_bg" />
          <div className="text-gray-800">
            <p className="text-sm text-nav_bg">{data?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotDetails;

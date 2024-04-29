import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { FaRegFlag } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

const SpotCard = ({ data }) => {
  return (
    <div className="px-5 py-8 rounded-lg bg-card_bg/75 backdrop-blur-lg mx-5 space-y-4 h-[60vh]">
      <div className="relative overflow-hidden rounded-lg">
        <img
          className="w-full h-52 lg:h-72 object-cover rounded-t-lg"
          src={data?.url}
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-90"></div>
        <div className="absolute bottom-0 left-0 px-4 py-2 text-white">
          <h1 className="text-2xl lg:text-3xl font-semibold">{data?.spot_Name}</h1>
        </div>
      </div>
      <div className="flex justify-between px-4 text-white">
        <div className="flex items-center gap-2">
          <CiLocationOn className="text-xl" />
          <p className="text-sm">{data?.location}</p>
        </div>
        <div className="flex items-center gap-2">
          <SlCalender className="text-xl" />
          <p className="text-sm">{data?.timing ? data?.timing : "Summer"}</p>
        </div>
        <div className="flex items-center gap-2">
          <FaRegFlag className="text-xl" />
          <p className="text-sm">{data?.cName}</p>
        </div>
      </div>
      <hr className="border-t border-gray-600" />
      <div className="px-4 text-white">
        <p className="text-sm">{data?.description.slice(0, 100)}...</p>
      </div>
      <div className="flex items-center justify-between px-4 text-white">
        <div>
          <span className="text-xs">Starting From</span>
          <div className="flex items-center gap-2">
            <h1 className="text-lg lg:text-2xl font-semibold">${data?.cost}</h1>
            <span className="text-xs line-through text-gray-400">${parseInt(data?.cost) + 20}</span>
          </div>
          <span className="text-xs">TAXES INCL/PERS</span>
        </div>
        <Link
          to={`/spotdetails/${data?._id}`}
          className="px-4 py-2 bg-btn_bg hover:bg-hover_bg rounded-lg text-white font-semibold transition duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

SpotCard.propTypes = {
  data: PropTypes.object,
};

export default SpotCard;

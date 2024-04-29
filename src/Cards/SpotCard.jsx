import PropTypes from "prop-types";
import { GoPeople } from "react-icons/go";
import { MdOutlineTimer } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
const SpotCard = ({ data }) => {
  return (
    <div className="px-5 py-10 rounded-md bg-card_bg/75 backdrop:blur-2xl mx-5 space-y-3 h-[67vh] lg:h-fit">
      <img className="w-full mx-auto object-cover h-40 lg:h-64" src={data?.url} alt="" />
      <h1 className="text-3xl font-semibold ">{data?.spot_Name}</h1>
      <div className="flex justify-between px-1 flex-wrap">
        <h1 className="flex items-center text-xs gap-1">
          <MdOutlineTimer />
          {data?.timing} days
        </h1>
        <h1 className="flex items-center text-xs gap-1">
          <SlCalender />
          {data?.seasonality ? data?.seasonality : "Summer"}
        </h1>
        <h1 className="flex items-center text-xs gap-1">
          <GoPeople />
          {data?.visitor}
        </h1>
      </div>
      <hr className="py-0 lg:py-2" />
      <div>
        <h1>{data?.description.slice(0,70)}..</h1>
      </div>
      <div className="flex items-center justify-between px-1">
        <div>
          <span className="text-xs">Starting From</span>
          <div className=" flex items-center gap-3">
            <h1 className="text-xl lg:text-3xl font-black text-white">
              $ {data?.cost}
            </h1>
          </div>
          <span className="text-xs">TAXES INCL/PERS</span>
        </div>
        <Link to={`/spotdetails/${data?._id}`} className="px-5 py-3 bg-btn_bg rounded">View Details</Link>
      </div>
    </div>
  );
};
SpotCard.propTypes = {
  data: PropTypes.object,
};
export default SpotCard;

import useRefetch from "../Hooks/UseRefetch";
import spots_BG from "/Resources/spots_bg.png";
import klicktrips from "/Resources/Klicktrips.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import SpotCard from "../Cards/SpotCard";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import { Link } from "react-router-dom";
import Loader from "./Loader/Loader";
const TouristSpots = () => {
  const { data, loading } = useRefetch(
    "https://assignment-10-plum.vercel.app/spots"
  );
  if (loading) {
    return <Loader />;
  }
  return (
    <section
      className="my-12 bg-no-repeat bg-cover py-3 lg:py-7"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${spots_BG}')`,
      }}
    >
      <div className=" flex flex-col items-center justify-center">
        <img className="w-[8%] mx-auto" src={klicktrips} alt="" />
        <h1
          style={{ fontFamily: '"Pacifico", cursive' }}
          className="text-5xl text-center dark:text-white text-nav_bg font-semibold italic"
        >
          Thrilling Tourists Spots
        </h1>
      </div>
      <div className=" w-full px-2 lg:w-3/4 mx-auto mt-16 relative">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: "#next",
            prevEl: "#prev",
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {data?.slice(0, 6).map((item, inx) => (
            <SwiperSlide key={inx}>
              <SpotCard data={item} />
            </SwiperSlide>
          ))}
          <div className="mt-5 flex items-center justify-between">
            <button
              id="prev"
              className="px-5 py-3 hover:underline bg-card_bg/75 backdrop:blur-2xl"
            >
              <GrFormPreviousLink className="text-xl font-semibold" />
            </button>
            <button
              id="next"
              className="px-5 py-3 hover:underline bg-card_bg/75 backdrop:blur-2xl"
            >
              <GrFormNextLink className="text-xl font-semibold" />
            </button>
          </div>
        </Swiper>
        <div className="flex items-center justify-between text-center w-full">
          <Link
            to={"/allTouristSpots"}
            className="mt-5 px-5 py-3 bg-btn_bg/75 w-40 mx-auto"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TouristSpots;

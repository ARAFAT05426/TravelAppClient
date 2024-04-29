import useRefetch from "../Hooks/UseRefetch";
import spots_BG from "/Resources/spots_bg.png";
import klicktrips from "/Resources/Klicktrips.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import SpotCard from "../Cards/SpotCard";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { Link } from "react-router-dom";

const TouristSpots = () => {
  const { data } = useRefetch("http://localhost:5426/spots");

  return (
    <section
      className="py-12 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url('${spots_BG}')` }}
    >
      <div className="flex flex-col items-center justify-center">
        <img className="w-[8%] mx-auto" src={klicktrips} alt="Klicktrips" />
        <h1 className="text-5xl text-center font-pacifico text-nav_bg font-semibold italic dark:text-white mt-8">
          Thrilling Tourists Spots
        </h1>
      </div>
      <div className="w-full px-4 lg:px-0 lg:w-3/4 mx-auto mt-16 relative">
        <Swiper
          slidesPerView={1}
          navigation={{ nextEl: "#next", prevEl: "#prev" }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          breakpoints={{
            576: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data?.slice(0, 6).map((item, index) => (
            <SwiperSlide key={index}>
              <SpotCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-8 flex justify-between">
          <button
            id="prev"
            className="px-4 py-2 hover:underline bg-card_bg/75 backdrop-blur-sm rounded-lg"
          >
            <GrFormPreviousLink className="text-xl font-semibold" />
          </button>
          <button
            id="next"
            className="px-4 py-2 hover:underline bg-card_bg/75 backdrop-blur-sm rounded-lg"
          >
            <GrFormNextLink className="text-xl font-semibold" />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/allTouristSpots"
            className="px-6 py-3 bg-btn_bg/75 hover:bg-btn_bg rounded-lg text-white transition-colors duration-300"
          >
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TouristSpots;

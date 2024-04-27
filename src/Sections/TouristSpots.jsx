import useRefetch from "../Hooks/useRefetch";
import spots_BG from "/Resources/spots_bg.png";
import klicktrips from "/Resources/Klicktrips.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import SpotCard from "../Cards/SpotCard";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
const TouristSpots = () => {
  const { data } = useRefetch("http://localhost:5426/spots");
  console.log(data);
  return (
    <section
      className="my-12 bg-no-repeat bg-cover py-7"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${spots_BG}')`,
      }}
    >
      <div className=" flex flex-col items-center justify-center">
        <img className="w-[8%] mx-auto" src={klicktrips} alt="" />
        <h1 className="text-5xl font-semibold italic">Thrilling Tour Spots</h1>
      </div>
      <div className=" w-full px-2 lg:w-3/4 mx-auto mt-16 relative">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: '#next',
            prevEl: '#prev'
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
          {data?.map((item, inx) => (
            <SwiperSlide key={inx}>
              <SpotCard data={item} />
            </SwiperSlide>
          ))}
          <div className="mt-5 flex items-center justify-between">
            <button id="prev" className="px-5 py-3 hover:underline bg-btn_bg  bg-card_bg/75 backdrop:blur-2xl">
              <GrFormPreviousLink className="text-xl font-semibold" />
            </button>
            <button id="next" className="px-5 py-3 hover:underline bg-btn_bg  bg-card_bg/75 backdrop:blur-2xl">
              <GrFormNextLink className="text-xl font-semibold" />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default TouristSpots;

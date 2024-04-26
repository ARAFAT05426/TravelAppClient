import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
// Slide_Images
import slide_1 from "/Resources/Slides/Slide_1.jpg";
import slide_2 from "/Resources/Slides/Slide_2.jpg";
import slide_3 from "/Resources/Slides/Slide_3.jpg";
import slide_4 from "/Resources/Slides/Slide_4.jpg";
import slide_5 from "/Resources/Slides/Slide_5.jpg";
const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{ delay: 1500 }}
        modules={[Autoplay, Pagination]}
        className="mySwiper min-h-[100vh-64px] absolute top-0 left-0"
      >
        <SwiperSlide>
          <img className="h-[92vh] w-full" src={slide_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[92vh] w-full" src={slide_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[92vh] w-full" src={slide_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[92vh] w-full" src={slide_4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[92vh] w-full" src={slide_5} alt="" />
        </SwiperSlide>
      </Swiper>
      {/* Text Content */}
      <div
        style={{ fontFamily: '"Tourney", sans-serif' }}
        className="absolute top-[40%] left-10 lg:left-1/4 max-w-4xl z-10 flex flex-col items-center justify-center"
      >
        <span className="text-center font-extralight text-xl">LETS TRAVEL THE WORLD WITH US</span>
        <h1 className="text-7xl text-center font-bold">
          <span
            className="font-light mr-4"
            style={{ fontFamily: '"Tourney", sans-serif' }}
          >
            EXPLORE
          </span>
          THE WORLD WITH  
          <span className="ml-5 text-nav_bg">
          <Typewriter  loop words={['KlickTrips', 'Our Guide', 'Joy']} cursor />

          </span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;

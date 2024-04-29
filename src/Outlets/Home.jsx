import Banner from "../Sections/Banner";
import Country from "../Sections/Country";
import NewsLetter from "../Sections/NewsLetter";
import Testimonials from "../Sections/Testimonials";
import TouristSpots from "../Sections/TouristSpots";
import Blogs from "../Sections/Blogs"
const Home = () => {
  return (
    <section className="">
      <Banner />
      <TouristSpots />
      <Testimonials />
      <Country />
      <Blogs />
      <NewsLetter />
    </section>
  );
};

export default Home;

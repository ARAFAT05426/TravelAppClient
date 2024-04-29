import { Link } from "react-router-dom";
import UseRefetch from "../Hooks/UseRefetch";

const Country = () => {
  const { data } = UseRefetch(`http://localhost:5426/coutrySpot`);
  return (
    <section className="py-10 px-3 lg:px-28">
      <div className="skewed"></div>
      <div className="text-center">
        <h1 className="text-btn_bg dark:text-white text-5xl italic font-pacifico tracking-wide mb-10">Pack Up and Go</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((item, index) => (
          <Link to={`/countrySpot/${item?.cName}`} key={index}>
            <div className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transform transition duration-300 hover:scale-105">
              <div
                className="w-full h-60 bg-cover bg-center relative"
                style={{ backgroundImage: `url('${item?.url}')` }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h1 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold">{item?.cName.toUpperCase()}</h1>
              </div>
              <div className="p-4">
                <p className="text-white/95">{item?.description.slice(0, 50)}...</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Country;

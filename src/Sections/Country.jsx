import { Link } from "react-router-dom";
import UseRefetch from "../Hooks/UseRefetch";
import Loader from "./Loader/Loader";

const Country = () => {
  const { data, loading } = UseRefetch(
    `https://assignment-10-plum.vercel.app/coutrySpot`
  );
  if (loading) {
    return <Loader />;
  }
  return (
    <section className="py-10 px-3 lg:px-28">
      <section>
        <div className="skewed"></div>
      </section>
      <div>
        <h1 className=" dark:text-white text-btn_bg text-6xl text-center font-semibold">
          Pack Up and Go
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between w-full mt-10">
        {data?.map((item, inx) => (
          <Link to={`/coutrySpot/${item?.cName}`} key={inx}>
            <div className="relative px-5 py-3 hover:scale-105 transition-all">
              <div
                className="w-full h-60 py-11 bg-cover bg-no-repeat relative rounded"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${item?.url}')`,
                }}
              >
                <h1 className="p-4 text-center text-2xl absolute top-0 left-0 font-semibold ">
                  {item?.cName.toUpperCase()}
                </h1>
                <p className="p-3 absolute bottom-0 right-0 max-w-44">
                  {item?.description.slice(0, 50)}....
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Country;

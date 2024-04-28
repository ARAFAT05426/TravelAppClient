import UseRefetch from "../Hooks/UseRefetch";

const Country = () => {
  const { data } = UseRefetch(`http://localhost:5426/coutrySpot`);
  return (
    <section className="py-10 px-3 lg:px-28">
      <div>
        <h1
          style={{ fontFamily: '"Pacifico", cursive' }}
          className=" dark:text-white text-btn_bg text-5xl text-center italic"
        >
          Pack Up and Go
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between w-full mt-10">
        {data?.map((item, inx) => (
          <div className="relative px-5 py-3 hover:scale-105 transition-all" key={inx}>
            <div
              className="w-full h-60 py-11 bg-cover bg-no-repeat relative"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${item?.url}')`,
              }}
            >
                <h1 className="p-4 text-center text-2xl absolute top-0 left-0 font-semibold ">{item?.cName.toUpperCase()}</h1>
                <p className="p-3 absolute bottom-0 right-0 max-w-44">{item?.description.slice(0,50)}....</p>
            </div>
            {/* <img className="h-52 w-96 object-cover" src={item?.url} alt="" /> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Country;

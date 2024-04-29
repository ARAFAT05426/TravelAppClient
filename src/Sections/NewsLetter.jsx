const NewsLetter = () => {
    return (
      <section className="mb-16">
        <div
          className="w-full bg-base-content bg-cover bg-none"
          style={{backgroundImage: `url('https://source.unsplash.com/random/640x480')`, backgroundBlendMode: `multiply`}}
        >
          <div className="container flex flex-col items-center justify-center p-4 py-20 mx-auto md:p-10">
            <h1 className="text-5xl font-semibold leading-none text-center text-gray-100">
              Get Our Updates
            </h1>
            <p className="pt-2 pb-8 text-xl text-center text-gray-100">
              Find out about events and other news
            </p>
            <div className="flex flex-row justify-center">
              <input
                type="text"
                placeholder="example@email.com"
                className="w-3/5 p-3 rounded-l-lg sm:w-2/3 bg-white/80"
              />
              <button
                type="button"
                className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-btn_bg text-gray-50"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default NewsLetter;
  
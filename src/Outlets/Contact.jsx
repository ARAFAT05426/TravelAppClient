const Contact = () => {
  return (
    <div>
      <section className="flex items-center justify-center min-h-screen px-3 md:px-20 lg:px-32 my-16 lg:my-12">
        <div className="grid grid-cols-1 gap-8 px-8 py-16 w-full rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-card_bg text-gray-800 shadow-xl">
          <div className="flex flex-col justify-between space-y-4">
            <div data-aos="flip-down" data-aos-duration="400">
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                Let`s talk!
              </h2>
              <p>Have question? Feel free to contact us</p>
            </div>
            <img
              src="https://i.ibb.co/f43GqtM/12982910-5124556-removebg.png"
              alt=""
              className="p-6 h-auto max-h-64 md:max-h-full"
            />
          </div>
          <form noValidate="" className="space-y-6 flex flex-col">
            <div>
              <label htmlFor="name" className="text-lg font-bold">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full border-2 p-3 rounded bg-white/80 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 ease-in-out"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-lg font-bold">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full border-2 p-3 rounded bg-white/80 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 ease-in-out"
              />
            </div>
            <div className="grow space-y-3">
              <label htmlFor="message" className="text-lg font-bold">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                placeholder="Enter your message"
                className="w-full h-[94%] border-2 p-3 rounded bg-white/80 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-lg mt-5 font-bold tracking-wide uppercase rounded bg-btn_bg text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

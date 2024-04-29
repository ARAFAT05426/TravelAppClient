const Testimonials = () => {
  const testimonials = [
    {
      content:
        "I've been using this travel service for years, and it never disappoints. The attention to detail and personalized experiences make every trip memorable.",
      author: "Jessica Martinez",
      position: "Frequent Traveler",
    },
    {
      content:
        "Booking through this platform was seamless. I found amazing deals and had access to a wide range of destinations. Highly recommend!",
      author: "Michael Johnson",
      position: "Adventure Enthusiast",
    },
    {
      content:
        "The customer service provided by this company is exceptional. They went above and beyond to ensure my trip went smoothly, even with last-minute changes.",
      author: "Emily Thompson",
      position: "Business Traveler",
    },
    {
      content:
        "As a solo traveler, safety is always a priority for me. I felt secure and well-supported throughout my journey with this travel service.",
      author: "David Lee",
      position: "Solo Explorer",
    },
  ];

  return (
    <section className="py-10 ">
      <section
        className="shadow-md my-10 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/Resources/wave.png')`,
        }}
      >
        <div className="container px-6 py-12 mx-auto">
          <h2 className="text-5xl text-white font-bold text-center mb-8">
            Traveler Testimonials
          </h2>
          <p className="text-white text-center max-w-lg mx-auto mb-8">
            Pri ex magna scaevola moderatius. Nullam accommodare no vix, est ei
            diceret alienum, et sit cetero malorum. Et sea iudico consequat, est
            sanctus adipisci ex.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-md overflow-hidden shadow-md bg-card_bg">
                <p className="text-white p-6">{testimonial.content}</p>
                <div className="flex items-center justify-center p-6 border-t border-gray-700">
                  <img
                    src={`https://source.unsplash.com/50x50/?portrait?${index + 1}`}
                    alt=""
                    className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500 mr-4"
                  />
                  <div>
                    <p className="text-lg font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-white">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;

import { useState } from "react";

const Testimonials = () => {
  const [testimonials] = useState([
    {
      content:
        "An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.",
      author: "Leroy Jenkins",
      position: "CTO of Company Co.",
    },
    {
      content:
        "Sit wisi sapientem ut, pri civibus temporibus voluptatibus et, ius cu hinc fabulas. Nam meliore minimum et, regione convenire cum id. Ex pro eros mucius consectetuer, pro magna nulla nonumy ne, eam putent iudicabit consulatu cu.",
      author: "John Doe",
      position: "CEO of Company Inc.",
    },
    {
      content:
        "Putant omnium elaboraret per ut. Id dicta tritani nominavi quo, mea id justo errem elaboraret. Agam mollis scripserit ea his, ut nec postea verear persecuti. Ea noster senserit eam, ferri omittantur ei nec. Id mel solet libris efficiantur, commune explicari et eos.",
      author: "Jane Smith",
      position: "CTO of Another Company",
    },
    {
      content:
        "Te omnes virtute volutpat sed. Ei esse eros interesset vel, ei populo denique ocurreret vix, eu cum pertinax mandamus vituperatoribus. Solum nihil luptatum per ex, ei amet viderer eos. Ea illum labitur mnesarchum pro.",
      author: "Emily Johnson",
      position: "Marketing Director",
    },
  ]);

  return (
    <section className="py-10">
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

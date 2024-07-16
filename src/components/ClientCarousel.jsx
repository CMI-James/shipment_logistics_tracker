import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

const testimonials = [
  {
    name: "Aileen",
    rating: 4,
    text: "Your rates are competitive, and I did shop around. Your people have been courteous and prompt with answers to my questions. So far it has been a great relationship. Thanks!",
  },
  {
    name: "James",
    rating: 4,
    text: "Don’t really want to say much, but I have to say thank you for your fast delivery. This is really a company with a high integrity. Keep up the good works",
  },
];

const ClientCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Change slide every 4 seconds
    arrows: false, // Disable the arrow buttons
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center p-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full mx-1 bg-gray-500"></div>
    ),
  };

  return (
    <div className="w-full flex flex-col items-center justify-center text-center bg-grey-450 text-white lg:px-24 px-4 py-20">
      <div className=" w-full text-left font-bold mb-4 ">
        <p className="block text-sm mb-2">SATISFIED</p>{" "}
        <h2 className="text-4xl font-bold">Clients</h2>
      </div>
      <div className="w-full max-w-xl">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-10">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gray-300 mb-4"></div>
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <div className="flex mb-4">
                  {[...Array(5)].map((star, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${
                        i < testimonial.rating
                          ? "text-red-500"
                          : "text-gray-400"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431 8.21 1.192-5.93 5.778 1.404 8.18L12 18.896l-7.353 3.872 1.404-8.18-5.93-5.778 8.21-1.192L12 .587z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg italic">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientCarousel;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const partners = [
    { id: 1, src: "/images/msc.png", alt: "MSC" },
    { id: 2, src: "/images/pil.png", alt: "PIL" },
    { id: 3, src: "/images/maersk.png", alt: "Maersk" },
    { id: 4, src: "/images/evergreen.png", alt: "Evergreen" },
    { id: 5, src: "/images/cosco.png", alt: "COSCO" },
  ];

  return (
    <div className="w-full lg:px-24 px-4 py-20">
      <h2 className="text-3xl font-bold mb-4">Tested & Trusted</h2>
      <h3 className="text-2xl font-bold mb-6">Partners</h3>
      <Slider {...settings}>
        {partners.map((partner) => (
          <div key={partner.id} className="flex justify-center">
            <img src={partner.src} alt={partner.alt} className="h-20 mx-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partners;

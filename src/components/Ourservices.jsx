import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import truck from "/images/truck4.jpg";
import airplane from "/images/airplane.jpg";
import ship_ from "/images/ship_.jpeg";

const services = [
  {
    id: 1,
    title: "TRUCKING SERVICES",
    description: "If you require quality Road Freight Services ( Road Transportation ) logistics provider that abides to your precise shipping needs with reliable, time reducing and cost effective results, then the services of Sea Wave Logistics are right for you.",
    image: truck,
    alt: "Trucking Services"
  },
  {
    id: 2,
    title: "AIR FREIGHT",
    description: "Need a one-stop solution for your international air freight and forwarding needs, whereas a faster, safer and cost effective way to ship and track your cargo by air to anywhere across the globe? Look no further than Sea Wave Logistics, for we take it there.",
    image: airplane,
    alt: "Air Freight"
  },
  {
    id: 3,
    title: "OCEAN FREIGHT",
    description: "Ocean Freight Services / Sea Freight Services offered by Sea Wave Logistics has demonstrated incomparable excellence to companies and individuals with special requirements. We are committed to providing efficient shipping and handling, ordering, pickup and on-time delivery...",
    image: ship_,
    alt: "Ocean Freight"
  }
];

const Ourservices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="px-4 py-20 sm:px-8 lg:px-20 bg-gray-50">
      <div className="text-center" data-aos="fade-up">
        <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
      </div>
      <p className="py-6 text-center text-lg md:text-xl text-gray-600" data-aos="fade-up" data-aos-delay="200">
        While the first impression may be lasting, for online shoppers each phase of the customer journey is important. This includes the transport journey and receipt. Sea Wave Logistics Parcel is an add-on for your business that we operate with the utmost commitment. We take care of all your shipping needs for customer satisfaction.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="shadow-lg flex flex-col justify-between gap-3 bg-white rounded-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={400 + index * 200}
          >
            <img src={service.image} alt={service.alt} className="object-cover h-56 w-full" />
            <div className="px-6 py-4 flex flex-col gap-4">
              <h1 className="text-xl font-semibold text-gray-800">{service.title}</h1>
              <p className="text-base text-gray-600">{service.description}</p>
            </div>
            <div className="px-6 py-4">
              <button className="bg-[#e8772e] hover:bg-[#e8813d] text-white px-4 py-2 rounded-md">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourservices;

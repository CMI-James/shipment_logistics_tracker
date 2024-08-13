import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import truck from "/images/truck4.jpg";
import airplane from "/images/airplane.jpg";
import ship_ from "/images/ship_.jpeg";
import courier from "/images/courier.jpg";
import dog from "/images/dog.jpg";
import railway from "/images/railway.jpg";
import warehousing from "/images/warehousing.jpg";import pas from "/images/pas.jpg";

const services = [
  {
    id: 1,
    title: "TRUCKING SERVICES",
    description:
      "If you need a dependable logistics provider for quality Road Freight Services (Road Transportation) that meets your exact shipping requirements with reliable, time-saving, and cost-effective solutions, Trustway Logistics is your ideal choice.",
    image: truck,
    alt: "Trucking Services",
  },
  {
    id: 2,
    title: "AIR FREIGHT",
    description:
      "Need a one-stop solution for your international air freight and forwarding needs, whereas a faster, safer and cost effective way to ship and track your cargo by air to anywhere across the globe? Look no further than Sea Wave Logistics, for we take it there.",
    image: airplane,
    alt: "Air Freight",
  },
  {
    id: 3,
    title: "OCEAN FREIGHT",
    description:
      "Trustway Logistics' Ocean Freight Services have consistently shown exceptional quality to businesses and individuals with specific needs. We are dedicated to delivering efficient shipping solutions, including handling, ordering, pickup, and timely delivery.",
    image: ship_,
    alt: "Ocean Freight",
  },
  {
    id: 4,
    title: "COURIER FREIGHT",
    description:
      "At Trustway Logistics, we understand that when it comes to choosing an affordable courier service and express shipping in the US, timing is crucial.",
    image: courier,
    alt: "Courier Freight",
  },
  {
    id: 5,
    title: "ANIMAL SHIPPING",
    description:
      "Pet Shipping: At Trustway Logistics, we are committed to providing our clients with all their pet shipping needs.",
    image: dog,
    alt: "Animal Shipping",
  },
  {
    id: 6,
    title: "RAILWAY LOGISTICS",
    description:
      "Our Rail Freight and Inland Road Freight services are tailored for clients seeking highly affordable options.",
    image: railway,
    alt: "Railway Logistics",
  },
  {
    id: 7,
    title: "WAREHOUSING",
    description:
      "Warehousing and Distribution: At Trustway Logistics, we are committed to meeting all our clients' warehousing needs.",
    image: warehousing,
    alt: "Warehousing",
  },
  {
    id: 8,
    title: "PACKAGING AND STORAGE",
    description:
      "Packaging of cargo is one of the most important aspects of modern business. Cargo should be packed in such a way that...",
    image: pas,
    alt: "Packaging and Storage",
  },

  {
    id: 8,
    title: "CONTAINER LEASING",
    description:
      "Trustway Logistics, in partnership with TAL International, offers a variety of tank container leasing services. Our leasing...",
    image: ship_,
    alt: "Container Leasing",
  },

  {
    id: 9,
    title: "CUSTOM CLEARANCE",
    description:
      "Trustway Logistics offers unmatched Customs Broking Services. Since our inception, we have been growing consistently each day.",
    image: ship_,
    alt: "Custom Clearance",
  },

  {
    id: 10,
    title: "DOOR TO DOOR",
    description:
      "At Trustway Logistics, we understand that not all shipments require the same service. That’s why we offer Door-to-Airport...",
    image: ship_,
    alt: "Door to Door",
  },
];

const ServicesComponent = ({ showAll = false }) => {
  useEffect(() => {
    AOS.init({ duration: 500, offset: 100, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="px-4 py-20 sm:px-8 lg:px-24 bg-gray-50  text-grey-450 text-opacity-90  ">
      <div className="text-center" data-aos="fade-up">
        <h1 className="text-2xl md:text-3xl font-bold text-grey-450 text-opacity-90">
          Our Services
        </h1>
      </div>
      <p
        className="py-6 text-center text-base md:text-base text-gray-600"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        While the first impression may be lasting, for online shoppers each
        phase of the customer journey is important. This includes the transport
        journey and receipt. Sea Wave Logistics Parcel is an add-on for your
        business that we operate with the utmost commitment. We take care of all
        your shipping needs for customer satisfaction.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services
          .slice(0, showAll ? services.length : 3)
          .map((service, index) => (
            <div
              key={service.id}
              className="shadow-lg flex flex-col justify-between gap-3 bg-white rounded-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={400 + index * 200}
            >
              <img
                src={service.image}
                alt={service.alt}
                className="object-cover h-52 w-full"
              />
              <div className="flex flex-col justify-between w-full flex-1">
                {" "}
                <div className="px-6 py-4 flex flex-col gap-4">
                  <h1 className="text-lg font-semibold text-gray-800">
                    {service.title}
                  </h1>
                  <p className="text-sm  text-gray-600">
                    {service.description}
                  </p>
                </div>
                <div className="px-6 py-4">
                  <Link to="/services">
                    {" "}
                    <button className="bg-[#e8772e] text-sm hover:bg-[#e8813d] text-white px-4 py-2 rounded-md">
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServicesComponent;

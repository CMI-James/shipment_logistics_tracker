import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaHouseChimney } from "react-icons/fa6";
import { VscPackage } from "react-icons/vsc";
import { MdDirectionsRailwayFilled } from "react-icons/md";

const services = [
  {
    id: 1,
    icon: <FaHouseChimney />,
    title: "WAREHOUSING",
    description:
      "Sea Wave Logistics as a Warehousing Agent, provides high level professional warehousing services assuring the safe arrival of your shipment.",
  },
  {
    id: 2,
    icon: <VscPackage />,
    title: "PACKAGING AND STORAGE",
    description:
      "Sea Wave Logistics has designed a customized packaging solutions specifically for the prevention of transit damages like breakages, scratches, abrasions etc.",
  },
  {
    id: 3,
    icon: <MdDirectionsRailwayFilled />,
    title: "RAILWAY LOGISTICS",
    description:
      "Sea Wave Logistics Rail Freight services have been designed for those clients who require a safe and efficient way to move their cargo from places in mint condition.",
  },
];

const MoreServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, easing: "ease-in-out" });
  }, []);

  return (
    <div className="bg-white   lg:px-24 px-4 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
          More
        </h2>
        <p className=" mb-[5rem]" data-aos="fade-up" data-aos-delay="200">
          WE MAINTAIN AN EXTENSIVE NETWORK OF OFFICES IN ALL MAJOR LOCATIONS TO
          ASSIST YOU WITH ALL YOUR SHIPPING NEEDS.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-14 ">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white p-8  shadow-lg rounded-lg relative z-10 group"
              data-aos="fade-up"
              data-aos-delay={400 + index * 200}
            >
              {/* Adjust the positioning of the icon */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
                <div className="w-fit flex justify-center items-center p-2 border-2 border-orange-450 bg-white rounded-full transition-all duration-500 ease-linear  group-hover:bg-orange-450">
                  <span
                    className="text-orange-450 transition-all duration-500 ease-linear group-hover:text-white text-6xl  flex justify-center items-center h-[2rem] w-[2rem]
"
                  >
                    {service.icon}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-orange-450">
                {service.title}
              </h3>
              <p className="">{service.description}</p>
            </div>
          ))}
        </div>
        <Link to="/services">
          {" "}
          <p
            className="text-orange-500 font-bold mt-8 inline-block hover:underline"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {" "}
            All Services
          </p>
        </Link>
      </div>
    </div>
  );
};

export default MoreServices;

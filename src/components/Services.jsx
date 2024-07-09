import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHouseChimney } from "react-icons/fa6";
import { VscPackage } from "react-icons/vsc";
import { MdDirectionsRailwayFilled } from "react-icons/md";

const services = [
  {
    id: 1,
    icon: <FaHouseChimney className="text-orange-500 text-6xl mb-4 flex justify-center items-center" />,
    title: "WAREHOUSING",
    description: "Sea Wave Logistics as a Warehousing Agent, provides high level professional warehousing services assuring the safe arrival of your shipment."
  },
  {
    id: 2,
    icon: <VscPackage className="text-orange-500 text-6xl mb-4 flex justify-center items-center" />,
    title: "PACKAGING AND STORAGE",
    description: "Sea Wave Logistics has designed a customized packaging solutions specifically for the prevention of transit damages like breakages, scratches, abrasions etc."
  },
  {
    id: 3,
    icon: <MdDirectionsRailwayFilled className="text-orange-500 text-6xl mb-4 flex justify-center items-center" />,
    title: "RAILWAY LOGISTICS",
    description: "Sea Wave Logistics Rail Freight services have been designed for those clients who require a safe and efficient way to move their cargo from places in mint condition."
  }
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">More</h2>
        <p className="text-gray-600 mb-8" data-aos="fade-up" data-aos-delay="200">
          WE HAVE A WIDE NETWORK OF OFFICES IN ALL MAJOR LOCATIONS TO HELP YOU WITH YOUR EVERY SHIPPING NEED
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white p-8 shadow-lg rounded-lg"
              data-aos="fade-up"
              data-aos-delay={400 + index * 200}
            >
           <div className='flex justify-center items-center'>   {service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <a href="#" className="text-orange-500 font-bold mt-8 inline-block" data-aos="fade-up" data-aos-delay="800">All Services</a>
      </div>
    </div>
  );
};

export default Services;

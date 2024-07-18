import React from "react";
import Header from "../components/Header";
import Ourservices from "../components/More";

import { IoLogoWhatsapp } from "react-icons/io5";
import ClientCarousel from "../components/ClientCarousel";
import Footer from "../components/Footer";
import Support from "../components/Support";
import ServicesComponent from "../components/ServicesComponent";

const Services = () => {
  return (
    <div>
      {" "}
      <Header />
      <a
        href="https://wa.me/2348148001157"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-2 left-2 bg-green-500 hover:bg-green-600 text-white rounded-full p-2 shadow-lg z-[1000]"
      >
        <IoLogoWhatsapp className="w-8 h-8" />
      </a>
      <p className="lg:px-24 px-4 py-7 text-3xl bg-gray-100 flex ">
        Our Services
      </p>
      <ServicesComponent  showAll={true}/>
      <hr />
      <ClientCarousel />
      <hr />
      <Support />
      <hr />
      <Footer />
      <Footer />
    </div>
  );
};

export default Services;

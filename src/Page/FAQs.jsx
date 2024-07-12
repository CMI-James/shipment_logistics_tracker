import React from "react";
import Header from "../components/Header";
import FAQComponent from "../components/FAQComponent";
import { IoLogoWhatsapp } from "react-icons/io5";

const FAQs = () => {
  return (
    <div>
      <Header />
      <a
        href="https://wa.me/2348148001157"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-2 left-2 bg-green-500 hover:bg-green-600 text-white rounded-full p-2 shadow-lg z-[1000]"
      >
        <IoLogoWhatsapp className="w-8 h-8" />
      </a>
      <p className="lg:px-24 px-4 py-7 text-2xl md:text-3xl bg-gray-100 flex ">
        Frequently Asked Questions
      </p>
      <FAQComponent />
    </div>
  );
};

export default FAQs;

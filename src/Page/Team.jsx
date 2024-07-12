import React from "react";
import Header from "../components/Header";
import { IoLogoWhatsapp } from "react-icons/io5";
import TeamComponent from "../components/TeamComponent";

import Footer from "../components/Footer";
import Support from "../components/Support";
const Team = () => {
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
      <p className="lg:px-24 px-4 py-7 text-3xl bg-gray-100 flex ">Our Team</p>
      <TeamComponent/>
      <hr />
      <Support />
      <hr />
      <Footer />
    </div>
  );
};

export default Team;

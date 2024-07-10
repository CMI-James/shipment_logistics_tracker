// src/Page/Home.js
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutHome from "../components/AboutUs";
import Ourservices from "../components/Ourservices";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import Team from "../components/Team";
import Support from "../components/Support";
import Partners from "../components/Partners";
import ClientCarousel from "../components/ClientCarousel";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";
import Loader from "../components/Loader"; // Import the Loader component
import useImageLoader from "../hooks/useImageLoader"; // Import the custom hook
import { ColorRing } from "react-loader-spinner";
import { IoLogoWhatsapp } from "react-icons/io5";

const Home = () => {
  const heroImages = [
    "/images/ship.svg",
    "/images/search.svg",
    "/images/support.svg",
  ];

  const imagesLoaded = useImageLoader(heroImages);

  return imagesLoaded ? (
    <div className="relative">
      <div className="absolute z-10  ">
        <Header />
      </div>
      <a
        href="https://wa.me/2348148001157"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-2 left-2 bg-green-500 hover:bg-green-600 text-white rounded-full p-2 shadow-lg z-[1000]"
      >
        <IoLogoWhatsapp className="w-8 h-8" />
      </a>
      <Hero />
      <hr />
      <AboutHome isTruncated={true} />
      <hr />
      <Ourservices />
      <hr />
      <WhyChooseUs />
      <br />
      <Services />
      <br />
      <ImageCarousel />
      <br />
      <Team />
      <br />
      <FAQ />
      <br />
      <Support />
      <br />
      <Partners />
      <br />
      <ClientCarousel />
      <br />
      <Footer />
    </div>
  ) : (
    <div className="w-full h-screen flex items-center justify-center">
      <ColorRing
        visible={true}
        height="120"
        width="120"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e8772e", "#d47d38", "#be6c44", "#a65c50", "#814239"]}
      />
    </div>
  );
};

export default Home;

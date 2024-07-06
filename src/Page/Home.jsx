import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutHome from "../components/AboutHome";
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

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time or use real loading logic here
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="">
      <div className="absolute z-10 ">
        <Header />
      </div>
      <Hero />
      <hr />
      <AboutHome />
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
  );
};

export default Home;

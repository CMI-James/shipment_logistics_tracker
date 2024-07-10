import React from "react";
import Header from "../components/Header";
import Ourservices from "../components/Ourservices";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div>
      {" "}
      <div className="absolute z-10  ">
        <Header/>
      </div>
      <div><p className="text-8">Services</p></div>
      <Ourservices />
      <Footer />
    </div>
  );
};

export default Services;

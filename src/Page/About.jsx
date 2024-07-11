import React from "react";
import Header from "../components/Header";
import AboutHome from "../components/AboutUs";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <div>
        <p className="text-[1.5rem]">About</p>
        <AboutHome isTruncated={false} />
      </div>
      <Footer />
    </div>
  );
};

export default About;

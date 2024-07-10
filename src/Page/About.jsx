import React from "react";
import Header from "../components/Header";
import AboutHome from "../components/AboutUs";

const About = () => {
  return (
    <div>
      <div className="absolute z-10  ">
        <Header />
      </div>
      <div>
        <p className="text-[1.5rem]">About</p>
        <AboutHome isTruncated={false} />
      </div>
    </div>
  );
};

export default About;

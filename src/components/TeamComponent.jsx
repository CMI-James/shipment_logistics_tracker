import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "Walter Blair",
    position: "Shipping And Logistics",
    image: "/images/walter-blair.jpg",
  },
  {
    name: "Garreth Paul",
    position: "Parcel Packaging And Safety",
    image: "/images/garreth-paul.jpg",
  },
  {
    name: "Amanda Anderson",
    position: "Customer Care Unit",
    image: "/images/amanda-anderson.jpg",
  },
  {
    name: "John D. Tyler",
    position: "Warehousing And Local Transport",
    image: "/images/john-d-tyler.jpg",
  },
];

const TeamComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, easing: "ease-in-out" });
  }, []);

  return (
    <div className=" w-full lg:px-24 px-4 py-20">
      <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
        Our Team
      </h2>
      <p className="mb-6" data-aos="fade-up" data-aos-delay="200">
        Meet some of the individuals who have helped us reach this milestone.
        Thank you.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md "
            data-aos="fade-up"
            data-aos-delay={400 + index * 200}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="mt-4 text-center p-2">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-500 text-sm ">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamComponent;

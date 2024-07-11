import React, { useState } from "react";
import { IoIosPin } from "react-icons/io";
import { FiBox } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";

import { TbWorld } from "react-icons/tb";
const WhyChooseUs = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const features = [
    {
      icon: <TbWorld className=" h-[2rem] w-[2rem]" />,
      title: "UNIVERSAL REACH",
      description:
        "Everyone recognizes the unique Trustway Logistics that stops in front of the door. Our commitment to reliability, speed, and transparency ensures that each parcel arrives safely and on time.",
    },
    {
      icon: <IoIosPin className=" h-[2rem] w-[2rem]" />,
      title: "TRACK & TRACE",
      description:
        "If you have registered a shipment, the recipient can automatically be sent the link to their track and trace to follow their parcel all the way to their front door.",
    },
    {
      icon: <FiBox className=" h-[2rem] w-[2rem]" />,
      title: "RETURNING PARCELS",
      description:
        "Trustway Logistics Parcel understands the importance of good return options. You can add a return label to your parcels, so that your customers can return their items via a Trustway Logistics point.",
    },
    {
      icon: <BiSupport className=" h-[2rem] w-[2rem]" />,
      title: "GREAT SUPPORT",
      description:
        "Customers want quick answers about their deliveries. We can be reached on social media, e-mail, and telephone, even on Saturdays.",
    },
  ];

  const toggleVideo = () => {
    setVideoPlaying(!videoPlaying);
  };

  return (
    <section className="bg-grey-450 text-white py-20">
      <div className="lg:px-24 px-4 sm:px-6  flex flex-col md:flex-row  gap-6 items-center  justify-between">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 ">
          <div className="relative">
            {!videoPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <button
                  onClick={toggleVideo}
                  className="text-orange-500 text-6xl"
                >
                  <i className="fas fa-play-circle"></i>
                </button>
              </div>
            )}
            {videoPlaying ? (
              <video controls className="w-full">
                <source src="/path-to-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src="/path-to-image.jpg"
                alt="Trustway Logistics"
                className="w-full"
              />
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="mb-4">Trustway Logistics</h1>
          <h2 className="text-4xl  mb-4 text-orange-450">Why Choose Us?</h2>
          <p className="mb-6">
            At Trustway Logistics, we prioritize long-term strategic
            partnerships with our customers. We are personally dedicated to
            exceeding expectations by offering advanced and customized services
            worldwide.
          </p>
          <ul className="p-0">
            {features.map((feature) => (
              <li key={feature.title} className="my-10 flex  items-start">
                <div className=" w-fit flex justify-center items-center p-3 m-6 border-2 border-orange-450 bg-orange-450 rounded-full ">
                  <span className="text-white ">
                    {feature.icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-orange-450">
                    {feature.title}
                  </h3>
                  <p>{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

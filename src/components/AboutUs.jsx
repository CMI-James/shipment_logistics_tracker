import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import signature from "/images/sig.png";
import { Link } from "react-router-dom";
import { IoGift } from "react-icons/io5";
import { BsGiftFill } from "react-icons/bs";
import { IoMdFingerPrint } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";
import { truncateText } from "../utils/utils";
const items = [
  {
    icon: <IoMdFingerPrint className=" h-[2rem] w-[2rem]" />,
    title: "EXCELLENCE",
    description:
      "We meticulously assess our strategy every five years. Strategy 2029 serves as the blueprint for our operational framework at Trustway Logistics - Ensuring Excellence in a Digital Era. It outlines our approach to reshaping our industry through digitalization, aiming to foster connectivity and enhance lives. This reaffirms our position as a leading global logistics service provider. Strategy 2025 harnesses the power of digitalization to propel our vision forward.",
  },
  {
    icon: <IoGift className=" h-[2rem] w-[2rem]" />,
    title: "FIRST CHOICE",
    description:
      "Trustway Logistics has remarkable clients worldwide, and we're committed to maintaining their loyalty. That's why we prioritize exceptional service and our First Choice program, designed to continuously advance our team's capabilities daily. Our motto, 'Everybody. Everyday. Everywhere. A little bit better,' guides us in this endeavor.",
  },
  {
    icon: <GiWorld className=" h-[2rem] w-[2rem]" />,
    title: "A BIGGER WORLD",
    description:
      "Trustway Logistics contributes to a sustainable world through our logistics operations. Tackling this significant challenge, the Trustway Logistics Group has set an ambitious goal for climate protection: achieving zero-emissions logistics by 2064. How will we accomplish this?",
  },
];

const AboutHome = ({ isTruncated }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 100,
      easing: "ease-in-out",
      once: true, // Animate only once
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-8 lg:gap-16 text-grey-450 text-opacity-90 lg:px-24 px-4 py-20">
      <div className="flex-1">
        <p className="text-lg text-gray-500" data-aos="fade-up">
          About us
        </p>
        <div data-aos="fade-up" data-aos-delay="200">
          {" "}
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            Our shipping solutions connect people with endless possibilities.
          </h2>
          <p className="text-lg mt-2">
            Trustway Logistics stands as a distinguished leader in the
            shipping and logistics industry, operating under the esteemed banner
            of the Trustway Logistics Group. With a comprehensive array of
            shipping solutions encompassing road, air, and rail transport, we
            specialize in facilitating seamless connections across the globe.
            Our commitment to excellence ensures dependable and efficient
            logistics services worldwide, meeting the diverse needs of our
            global clientele with precision and reliability.
          </p>
        </div>

        <div className="flex flex-col gap-8 pt-12 ">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 group"
              data-aos="fade-up"
              data-aos-delay={600 + index * 200}
            >
              <div className="w-fit flex justify-center items-center p-2 border-2 border-orange-450 bg-white rounded-full transition-all duration-500 ease-linear  group-hover:bg-orange-450">
                <span className="text-orange-450 transition-all duration-500 ease-linear group-hover:text-white">
                  {item.icon}
                </span>
              </div>

              <div>
                <h1 className="pb-4 text-xl font-bold hover:text-orange-450">
                  {item.title}
                </h1>
                <p className="text-sm">
                  {isTruncated
                    ? truncateText(item.description, 15)
                    : item.description}
                  {isTruncated && (
                    <Link
                      to="/about"
                      className="text-orange-450 hover:underline"
                    >
                      Read More
                    </Link>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 pt-8 md:pt-40">
        <div data-aos="fade-up" data-aos-delay="800">
          <h2 className="text-2xl md:text-3xl font-bold">
            BE THE BOSS OF YOUR SHIPMENT
          </h2>
          <p className="text-lg mt-4">
            Our comprehensive shipping solution, My Trustway Logistics Parcel,
            puts you in control of all your shipments. We provide real-time
            updates at every stage of the delivery journey, starting from when
            your parcel is dispatched. Any shipping irregularities are promptly
            highlighted in our user-friendly dashboard. With a few simple
            clicks, you can generate detailed shipping reports, ensuring
            seamless integration with your logistics operations.
          </p>
        </div>
        <img
          src={signature}
          alt=""
          className="w-40 mt-8"
          data-aos="fade-up"
          data-aos-delay="1200"
        />
        <h1 data-aos="fade-up" data-aos-delay="1400">
          <span className="text-xl font-extrabold block">Michael Thompson</span>{" "}
          <span className="text-sm">Chief Executive Officer</span>
        </h1>
      </div>
    </div>
  );
};

export default AboutHome;

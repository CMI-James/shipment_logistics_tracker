import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Hero.css";
import ship_logo from "/images/ship.svg";
import search_logo from "/images/search.svg";
import support_logo from "/images/support.svg";

const transitionSettings = {
  duration: 0.8,
  ease: [0.6, -0.05, 0.01, 0.99],
};

const Hero = () => {
  const [trackingCode, setTrackingCode] = useState("");
  const navigate = useNavigate();

  const handleTrackClick = () => {
    if (trackingCode.trim()) {
      navigate(`/userpage/${trackingCode}`);
    }
  };

  return (
    <div className="hero w-full flex justify-center items-center mt-[7rem] lg:mt-[10rem]">
      <div className="text-white text-center w-[90%] lg:w-[50%] flex flex-col justify-center items-center gap-6">
        <motion.h1
          className="text-[30px] lg:text-[35px] font-semibold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitionSettings, delay: 0.1 }}
        >
          ACHIEVE MORE
        </motion.h1>
        <motion.p
          className="text-[14px] lg:text-[16px] font-semibold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitionSettings, delay: 0.2 }}
        >
          LOGISTICS | CARGO | WAREHOUSING
        </motion.p>
        <motion.div
          className="flex w-full text-center text-black text-[1rem] text-opacity-60 font-semibold border-zinc-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitionSettings, delay: 0.4 }}
        >
          <div className="flex-1 bg-white py-6 flex flex-col gap-2 justify-center items-center">
            <img src={ship_logo} className="w-8 lg:w-10" alt="Ship" /> Ship
          </div>
          <div className="bg-[#0b181e] text-white border gap-1 border-white flex-1 py-6 flex flex-col justify-center items-center">
            <img src={search_logo} className="w-10 lg:w-14" alt="Track" /> Track
          </div>
          <div className="flex-1 bg-white py-6 flex flex-col gap-1 justify-center items-center">
            <img src={support_logo} className="w-8 lg:w-10" alt="Support" /> Support
          </div>
        </motion.div>
        <motion.div
          className="flex items-center w-full justify-center gap-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitionSettings, delay: 0.7 }}
        >
          <input
            type="text"
            placeholder="Tracking ID"
            value={trackingCode}
            onChange={(e) => setTrackingCode(e.target.value)}
            className="border w-full border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#e8772e]"
          />
          <button
            onClick={handleTrackClick}
            className="bg-[#e8772e] text-white p-3 px-6 lg:px-[2rem] hover:bg-[#e8772e] focus:outline-none focus:ring-2 focus:ring-[#e8772e]"
          >
            Track
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

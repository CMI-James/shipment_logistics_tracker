import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50">
      <video className="w-[8rem] h-auto" autoPlay loop muted>
        <source src="/images/Shipping.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loader;

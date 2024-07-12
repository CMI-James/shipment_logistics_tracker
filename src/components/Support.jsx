import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const contactDetails = [
  {
    icon: <FaLocationDot />,
    title: "Our Address",
    info: "347-349 Goswell Rd, The Angel, EC1V 7JN, UK",
  },
  {
    icon: <MdOutlineEmail />,
    title: "Email Us",
    info: "trustwaylogisticservices@gmail.com",
  },
  {
    icon: <BiSolidPhoneCall />,
    title: "Call Us",
    info: ["+62895342604103", "+1(305)518-5146"],
  },
];

const Support = () => {
  return (
    <div className="w-full lg:px-24 px-4 py-20">
      <h2 className="text-3xl font-bold mb-4">Get Support</h2>
      <p className="mb-6">
        Get help from our customer care unit. You can request a quote.
      </p>
      <form className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-4 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-4 rounded-lg"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 mb-6">
          <input
            type="tel"
            placeholder="Your Phone"
            className="border p-4 rounded-lg"
          />
          <textarea
            placeholder="Write Us A Message"
            className="border p-4 rounded-lg h-32"
          ></textarea>
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className=" bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600"
          >
            Send Message
          </button>
        </div>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {contactDetails.map(({ icon, title, info }, index) => (
          <div
            key={index}
            className="flex gap-2 bg-white shadow-md rounded-lg p-4 items-center"
          >
            <div className="w-fit flex justify-center items-center p-2  border-2 border-dotted border-orange-450 bg-white rounded-full">
              <span className="text-orange-450 text-3xl flex justify-center items-center h-6 w-6">
                {icon}
              </span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">{title}</h3>
              {Array.isArray(info) ? (
                info.map((line, idx) => (
                  <p key={idx} className="text-sm">
                    {line}
                  </p>
                ))
              ) : (
                <p className="text-sm">{info}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;

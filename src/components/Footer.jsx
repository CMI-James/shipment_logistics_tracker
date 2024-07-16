import React, { useState } from "react";
import header_logo from "/images/header_logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TailSpin } from "react-loader-spinner";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [trackingCode, setTrackingCode] = useState("");
  const navigate = useNavigate();

  const handleTrackClick = () => {
    setIsLoading(true);
    if (trackingCode.trim()) {
      navigate(`/userpage/${trackingCode}`);
    }
    setIsLoading(false);
  };

  const companyLinks = [
    { name: "About us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Terms of Services", path: "/policy" },
    { name: "Contact Us", path: "/support" },
  ];

  const moreLinks = [
    { name: "Track & Trace", path: "/user" },
    { name: "Request For A Shipment", path: "/" },
    { name: "Frequently Asked Questions", path: "/faqs" },
    { name: "Corporate Responsibility", path: "/policy" },
  ];

  return (
    <footer className="bg-gray-100  w-full lg:px-12 px-4 py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/3  mb-6 overflow-hidden text-ellipsis">
            <Link to="/">
              <div className="flex items-center">
                <img
                  src={header_logo}
                  alt="Trustway Logistics Logo"
                  className="w-32"
                />
              </div>
            </Link>
            <address className="flex flex-col my-2 text-gray-500 text-sm gap-3 not-italic">
              <p>347-349 Goswell Rd, The Angel, EC1V 7JN, UK</p>
              <p>
                <strong>Phone:</strong> +62895342604103, +1(305)518-5146
              </p>
              <p>
                <strong> Email:</strong>
                <a
                  href="mailto:trustwaylogisticservices@gmail.com"
                  className="text-orange-450 overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  trustwaylogisticservices@gmail.com
                </a>
              </p>
              <p>
                <strong> Website:</strong>
                <a
                  href="http://trustway-logistics1.vercel.app/"
                  className="text-orange-450"
                >
                  www.trustwaylogistics.com
                </a>
              </p>
            </address>
          </div>
          <div className="w-full md:w-1/3 md:pl-[2rem] mb-6">
            <h3 className="text-lg font-semibold mb-2">OUR COMPANY</h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-500 flex items-center"
                  >
                    <span className="text-orange-450">
                      {" "}
                      <MdOutlineKeyboardArrowRight />
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-2">
              MORE FROM TRUSTWAY LOGISTICS
            </h3>
            <ul className="flex flex-col gap-3">
              {moreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-500 flex items-center"
                  >
                    <span className="text-orange-450">
                      {" "}
                      <MdOutlineKeyboardArrowRight />
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center  pt-6">
          <p className="text-sm text-center md:text-left text-gray-500">
            Trustway Logistics is committed to safeguarding the privacy of our
            website users. When you visit our web pages, our servers temporarily
            store connection data for security purposes, including the
            computer's connection details, a list of the pages visited on our
            site, the date and duration of your visit, and identification data
            such as browser type and operating system. We also capture
            information about the website that referred you to ours. We do not
            collect additional personal information such as your name, address,
            telephone number, or email address unless provided voluntarily, for
            instance, when completing an online form, registering, participating
            in a survey or competition, fulfilling a contract, or requesting
            information. Any personal data you provide is used solely for the
            technical administration of our web pages and to fulfill your
            requests and preferences, primarily in connection with contracts or
            responding to your inquiries. This information helps us enhance the
            services we provide, tailor our website's content and services to
            better suit your needs, and improve overall usability.
          </p>
          <div className="mt-6 flex flex-col md:flex-row w-full justify-center">
            <input
              type="text"
              placeholder="Tracking ID"
              value={trackingCode}
              onChange={(e) => setTrackingCode(e.target.value)}
              className="border  border-gray-300 py-2 px-6 focus:outline-none rounded-md  text-black"
            />
            <button   onClick={handleTrackClick} className="bg-blue-900 text-white py-2 px-6 rounded-lg">
              {isLoading ? (
                <TailSpin
                  visible={true}
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              ) : (
                "  Track & Trace"
              )}
            </button>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-between items-center ">
            {" "}
            <div className="mt-6 text-center text-sm text-gray-500">
              © 2009 - 2024 Trustway Logistics. All Rights Reserved
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <FaFacebookF className="border border-orange-450 bg-orange-450 text-white rounded-full p-1 text-3xl" />
              <FaInstagram className="border border-orange-450 bg-orange-450 text-white rounded-full p-1 text-3xl" />
              <FaXTwitter className="border border-orange-450 bg-orange-450 text-white rounded-full p-1 text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import header_logo from "/images/header_logo.svg";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Footer = () => {
  const companyLinks = [
    { name: "About us", url: "#" },
    { name: "Services", url: "#" },
    { name: "Terms of Services", url: "#" },
    { name: "Contact Us", url: "#" },
  ];

  const moreLinks = [
    { name: "Track & Trace", url: "#" },
    { name: "Request For A Shipment", url: "#" },
    { name: "Frequently Asked Questions", url: "#" },
    { name: "Corporate Responsibility", url: "#" },
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
                  <a
                    href={link.url}
                    className="text-gray-500 flex items-center"
                  >
                    <span className="text-orange-450">
                      {" "}
                      <MdOutlineKeyboardArrowRight />
                    </span>
                    {link.name}
                  </a>
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
                  <a
                    href={link.url}
                    className="text-gray-500 flex items-center"
                  >
                    <span className="text-orange-450">
                      {" "}
                      <MdOutlineKeyboardArrowRight />
                    </span>
                    {link.name}
                  </a>
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
          <div className="mt-6">
            <Link to="/user">
              <button className="bg-blue-900 text-white py-2 px-6 rounded-lg">
                Track & Trace
              </button>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-between items-center ">
            {" "}
            <div className="mt-6 text-center text-sm text-gray-500">
              © 2009 - 2024 Trustway Logistics. All Rights Reserved
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <FaFacebookF className="border border-orange-450 bg-orange-450 text-white rounded-full p-1 text-2xl" />
              <FaInstagram className="border border-orange-450 bg-orange-450 text-white rounded-full p-1 text-2xl" />
              <FaXTwitter className="border border-orange-450 bg-orange-450 text-white rounded-full p-1 text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

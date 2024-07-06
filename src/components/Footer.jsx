import React from "react";

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
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <img src="/path-to-logo.png" alt="Sea Wave Logistics" className="mb-4" />
            <address>
              <p>347-349 Goswell Rd, The Angel, EC1V 7JN, UK</p>
              <p>Phone: +1 (209) 651-4610, +44 7498137429</p>
              <p>Email: <a href="mailto:support@seawavelogistics.com" className="text-orange-500">support@seawavelogistics.com</a></p>
              <p>Website: <a href="https://www.seawavelogistics.com" className="text-orange-500">www.seawavelogistics.com</a></p>
            </address>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-2">OUR COMPANY</h3>
            <ul>
              {companyLinks.map(link => (
                <li key={link.name}>
                  <a href={link.url} className="text-orange-500">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-2">MORE FROM SEA WAVE LOGISTICS</h3>
            <ul>
              {moreLinks.map(link => (
                <li key={link.name}>
                  <a href={link.url} className="text-orange-500">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center border-t border-gray-300 pt-6">
          <p className="text-sm">
            Sea Wave Logistics is committed to preserving the privacy of users of our websites. When you visit our web pages, our web servers always temporarily save for security purposes the connection data of the computer connecting to our site, a list of the web pages that you visit within our site, the date and duration of your visit, the identification data of the type of browser and operation system used as well as the website through which you linked to our site. Additional personal information such as your name, address, telephone number or e-mail address is not collected unless you provide this data voluntarily, e.g. while completing an online contact form, as part of a registration, survey, competition, fulfillment of contract or an information request. We use the personal data which you have made available to us exclusively for technical administration of the web pages and to fulfill your wishes and requests - thus primarily for fulfillment of a contract concluded with you or to answer your request. In turn, it helps us improve the services we offer to you, and to make our website's content and services easier to use and more appropriate to you.
          </p>
          <div className="mt-6">
            <button className="bg-blue-900 text-white py-2 px-6 rounded-lg">Track & Trace</button>
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="#" className="text-orange-500"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-orange-500"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-orange-500"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          © 2009 - 2024 Sea Wave Logistics. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

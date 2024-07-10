import React, { useState } from "react";
import header_logo from "/images/header_logo.svg";
import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai"; // Import the menu icon

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the mobile menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the state of the mobile menu
  };

  // Array of navigation items
  const navItems = [
    "About us",
    "Our Team",
    "Our Services",
    "FAQs",
    "Support",
    "Policy",
    "Parcel",
  ];

  return (
    <div className="fixed w-full bg-white lg:px-12 px-4 py-4 flex justify-between items-center shadow-md text-grey-450">
      {/* Logo Section */}
      <Link to="/">
        <div className="flex items-center">
          <img
            src={header_logo}
            alt="Trustway Logistics Logo"
            className="w-32"
          />
        </div>
      </Link>

      {/* Navigation Menu */}
      <div className="hidden lg:flex flex-1 justify-center">
        <ul className="flex space-x-6 font-semibold text-lg">
          {navItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Track Cargo Button */}
      <div className="flex gap-4">
        <div className="flex">
          <Link to="/user">
            <button className="border-orange-450 border-2  text-orange-450 rounded-lg px-4 py-1">
              Track Cargo
            </button>
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className={`${menuOpen ? "rotate-90 " : ""} text-orange-450 `}
          >
            <AiOutlineMenu size={24} />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-0 bg-white w-full shadow-lg lg:hidden">
          <ul className="flex flex-col items-center space-y-10 p-4 font-semibold text-lg">
            {navItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;

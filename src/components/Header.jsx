import React, { useState } from "react";
import header_logo from "/images/header_logo.svg";
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
    <div className="fixed w-full bg-white p-4 flex justify-between items-center shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={header_logo} alt="Trustway Logistics Logo" className="w-32" />
      </div>

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
          <button className="border-2 border-[#e8772e] text-[#e8772e] rounded-lg px-4 py-1">
            Track Cargo
          </button>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-[#e8772e]">
            <AiOutlineMenu size={24} />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-0 bg-white w-full shadow-lg lg:hidden">
          <ul className="flex flex-col items-center space-y-4 p-4 font-semibold text-lg">
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

import React, { useState } from "react";
import header_logo from "/images/header_logo.svg";
import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai"; // Import the menu icon

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage the mobile menu

  const toggleMenu = () => {
    console.log('it was the toggleMenu')
    setMenuOpen(!menuOpen); // Toggle the state of the mobile menu

  };

  const navItems = [
    { name: "About us", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Our Services", path: "/services" },
    { name: "FAQs", path: "/faqs" },
    { name: "Support", path: "/support" },
    { name: "Policy", path: "/policy" },
    { name: "Parcel", path: "/parcel" },
  ];
  return (
    <div className="sticky top-0 z-[1000] w-full bg-white  lg:px-12 px-4 py-2 flex justify-between items-center shadow-md text-grey-450">
      {/* Logo Section */}
      <Link to="/">
        <div className="flex items-center">
          <img
            src={header_logo}
            alt="Trustway Logistics Logo"
            className="w-28"
          />
        </div>
      </Link>

      {/* Navigation Menu */}
      <div className="hidden lg:flex flex-1 justify-center">
        <ul className="flex space-x-6 font-semibold text-base">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="underline-offset-2 hover:border-b-orange-450 hover:border-b-[1px] border-b-[1px] border-b-white  transition-all ease-in duration-500 hover:text-orange-450"
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Track Cargo Button */}
      <div className="flex gap-4 items-center">
        <div className="flex ">
          <Link to="/user">
            <button className="border-orange-450 border-2 text-sm text-orange-450 rounded-lg px-4 py-1">
              Track Cargo
            </button>
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden flex items-center " >
         <button > <label className="btn btn-circle swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onClick={toggleMenu}/>

            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label></button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-0 bg-white w-full shadow-lg lg:hidden">
          <ul className="flex flex-col items-center space-y-10 p-4 font-semibold text-lg">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;

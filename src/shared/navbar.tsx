import React, { useState, useEffect } from "react";
import { navLink } from "../constants";
import { Link } from "react-router-dom";
import Menu from "../assets/menu.png";
import Logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <>
      <div className="relative flex items-center justify-between px-6 py-4 max-w-7xl">
        <img src={Logo} alt="Logo" />

        <div className="absolute top-4 right-6 flex items-center gap-6 z-50">
          <FaUser className="text-white text-xl cursor-pointer" />
          <CiSearch className="text-white text-xl cursor-pointer" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md focus:outline-none text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <span className="text-white text-3xl font-bold">&times;</span>
            ) : (
              <img src={Menu} alt="Menu" className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-40">
          <nav
            className="space-y-8 text-white text-xl font-medium text-center"
            role="navigation"
            aria-label="Main menu"
          >
            {navLink.map((item) => (
              <Link
                key={item.route}
                to={item.route}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-2 rounded-md hover:text-white transition duration-300 cursor-pointer select-none font-semibold tracking-wide text-shadow-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;

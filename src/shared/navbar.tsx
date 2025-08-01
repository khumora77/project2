import React, { useState } from "react";
import { navLink } from "../constants";
import { Link } from "react-router-dom";
import Menu from "../assets/menu.png";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img src={Logo} alt="ewf" />
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-20 z-50 p-2 rounded-md bg-black focus:outline-none"
        aria-label="Open menu"
      >
        <img src={Menu} alt="asd" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-40">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl font-bold focus:outline-none"
            aria-label="Close menu"
          >
            &times;
          </button>

          <nav className="space-y-8 text-white text-xl font-medium text-center">
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

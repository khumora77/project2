import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaTruck } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";
import i18n from "i18next";
import MenuIcon from "../assets/menu.png";
import { navLinks } from "../constants";
import { Button } from "../components/ui/button";
import ModeToggle from "./mode-toggle";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

interface Language {
  code: string;
  name: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const currentLanguage = i18n.language || "en";

  const languages: Language[] = [
    { code: "en", name: "English" },
    { code: "uz", name: "O'zbekcha" },
    { code: "ru", name: "Русский" },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:scale-105 transition-transform">
          <FaTruck className="text-3xl text-[#ff4800]" />
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-[#ff4800] to-[#ff8c00] bg-clip-text text-transparent">
            FASTER
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((item) => (
            <Link
              key={item.route}
              to={item.route}
              className={`px-3 py-2 rounded-md transition font-medium ${
                location.pathname === item.route
                  ? "text-white bg-[#ff4800]"
                  : "hover:text-white hover:bg-gray-800 dark:text-white text-gray-800"
              }`}
            >
              {t(item.name)}
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center gap-1"
              aria-label={t("change_language")}
            >
              <MdLanguage className="text-xl dark:text-white" />
              <span className="text-sm hidden sm:inline dark:text-white">
                {currentLanguage.toUpperCase()}
              </span>
            </button>
            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50 dark:bg-gray-900 dark:border-gray-700">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`block w-full text-left px-4 py-2 transition ${
                      currentLanguage === lang.code
                        ? "bg-[#ff4800] text-white"
                        : "text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <ModeToggle />

          {/* Contact Button */}
          <Link to="/contact">
            <Button className="bg-[#ff4800] hover:bg-[#ff6a00] text-white hidden md:block">
              {t("getQuote")}
            </Button>
          </Link>

          {/* Auth Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm" className="rounded-full">
                  {t("logIn")}
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button variant="ghost" size="sm" className="rounded-full">
                  {t("signUp")}
                </Button>
              </SignUpButton>
            </SignedOut>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {isOpen ? (
              <span className="text-2xl font-bold dark:text-white text-gray-800">×</span>
            ) : (
              <img src={MenuIcon} alt="menu" className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center space-y-6 text-center p-6">
          {navLinks.map((item) => (
            <Link
              key={item.route}
              to={item.route}
              onClick={() => setIsOpen(false)}
              className={`text-xl py-3 px-6 w-full rounded ${
                location.pathname === item.route
                  ? "bg-[#ff4800] text-white font-bold"
                  : "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
            >
              {t(item.name)}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 text-lg py-3 px-6 bg-[#ff4800] text-white rounded font-bold w-full"
          >
            {t("get_quote")}
          </Link>

          {/* Mobile Auth */}
          <div className="mt-4 flex flex-col gap-2 w-full">
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="secondary" className="w-full">
                  {t("logIn")}
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button variant="secondary" className="w-full">
                  {t("signUp")}
                </Button>
              </SignUpButton>
            </SignedOut>
          </div>

          {/* Language Switch */}
          <div className="mt-4">
            <p className="text-gray-400 mb-2">{t("select_language")}</p>
            <div className="flex gap-3 flex-wrap justify-center">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`px-4 py-2 rounded ${
                    currentLanguage === lang.code
                      ? "bg-[#ff4800] text-white"
                      : "bg-gray-700 text-white hover:bg-gray-600"
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

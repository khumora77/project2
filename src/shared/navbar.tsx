import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaTruck } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";
import i18n from "i18next";
import Menu from "../assets/menu.png";
import { navLinks } from "../constants";
import { Button } from "../components/ui/button";

interface NavLink {
  route: string;
  name: string;
}

interface Language {
  code: string;
  name: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLangOpen, setIsLangOpen] = useState<boolean>(false);
  const location = useLocation();
  const { t } = useTranslation();
  const currentLanguage = i18n.language || "en";

  const languages: Language[] = [
    { code: "en", name: "English" },
    { code: "uz", name: "O'zbekcha" },
    { code: "ru", name: "Русский" },
  ];

  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    return () => handleRouteChange();
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
    setIsOpen(false);
  };

  return (
    <header className="text-white shadow-lg sticky top-0 z-50 bg-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
        >
          <div className="relative">
            <FaTruck className="text-3xl text-[#ff4800]" />
          </div>
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-[#ff4800] to-[#ff8c00] bg-clip-text text-transparent">
            {currentLanguage === "uz" ? "TEZKOR" : "FASTER"}
          </h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((item) => (
            <Link
              key={item.route}
              to={item.route}
              className={`px-3 py-2 rounded-md transition text-black ${
                location.pathname === item.route
                  ? "text-black font-bold bg-[#ff4800]"
                  : "hover:text-white hover:bg-gray-800"
              }`}
            >
              {t(item.name)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="p-2 rounded-full hover:bg-gray-800 transition flex items-center gap-1"
              aria-label={t("change_language")}
              aria-expanded={isLangOpen}
            >
              <MdLanguage className="text-xl text-gray-800" />
              <span className="text-sm hidden sm:inline text-gray-800">
                {currentLanguage.toUpperCase()}
              </span>
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`block w-full text-left px-4 py-2 ${
                      currentLanguage === lang.code
                        ? "bg-[#ff4800] text-white"
                        : "text-gray-800 hover:bg-gray-100"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link to={"/contact"}>
            <Button className="bg-[#ff4800] hover:bg-[#ff6a00] text-white hidden md:block">
              {t("getQuote")}
            </Button>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-200 transition"
            aria-label={isOpen ? t("close_menu") : t("open_menu")}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <span className="text-2xl font-bold text-gray-800">×</span>
            ) : (
              <img
                src={Menu}
                alt={t("menu")}
                className="h-6 w-6"
                width={24}
                height={24}
              />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-40 pt-20"
          aria-modal="true"
        >
          <nav className="w-full space-y-4 text-center">
            {navLinks.map((item) => (
              <Link
                key={item.route}
                to={item.route}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-4 text-xl ${
                  location.pathname === item.route
                    ? "text-white font-bold bg-[#ff4800]"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
              >
                {t(item.name)}
              </Link>
            ))}

            <div className="mt-8 border-t border-gray-700 pt-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 text-xl bg-[#ff4800] text-white font-bold mb-4"
              >
                {t("get_quote")}
              </Link>

              <h3 className="text-gray-400 mb-3">{t("select_language")}</h3>
              <div className="flex justify-center gap-3">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`px-4 py-2 rounded-md ${
                      currentLanguage === lang.code
                        ? "bg-[#ff4800] text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

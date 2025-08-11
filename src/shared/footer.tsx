import React from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Link, useParams } from "react-router-dom";
import { navLinks } from "../constants";
import { useTranslation } from "react-i18next";
import { SlArrowRight } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export function Footer() {
  const { t } = useTranslation();
  const { lng } = useParams(); 

  return (
    <footer className="bg-[#1f1f2e] text-gray-300 pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Get in Touch */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#ff4800]">
              {t("footer.get_in_touch")}
            </h3>
            <address className="not-italic space-y-2">
              <p className="flex items-start">
                <svg
                  className="h-5 w-5 mr-2 mt-0.5 text-[#ff4800]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {t("footer.address")}
              </p>
              <p className="flex items-center">
                <svg
                  className="h-5 w-5 mr-2 text-[#ff4800]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {t("footer.phone")}
              </p>
              <p className="flex items-center">
                <svg
                  className="h-5 w-5 mr-2 text-[#ff4800]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {t("footer.email")}
              </p>
            </address>
            <div className="flex gap-4 items-center">
              {[
                {
                  icon: <FaTwitter className="text-lg" />,
                  color: "hover:text-[#ff4800]",
                },
                {
                  icon: <FaFacebookF className="text-lg" />,
                  color: "hover:text-[#ff4800]",
                },
                {
                  icon: <FaLinkedinIn className="text-lg" />,
                  color: "hover:text-[#ff4800]",
                },
                {
                  icon: <FaInstagram className="text-lg" />,
                  color: "hover:text-[#ff4800]",
                },
              ].map((item, index) => (
                <span
                  key={index}
                  className={`p-2 rounded-full text-black border border-gray-300 hover:border-transparent bg-white bg-opacity-10 hover:bg-opacity-20 transition-all cursor-pointer ${item.color}`}
                >
                  {item.icon}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#ff4800]">
              {t("footer.quick_links")}
            </h3>
            <nav className="space-y-2">
              {navLinks.map((item) => (
                <div className="flex items-center text-[16px] font-semibold">
                  <SlArrowRight />
                   <Link
                                  key={item.route}
                                  onClick={() => window.scrollTo({ top:0, behavior: "smooth" })}
                                  to={`/${lng || "en"}${item.route}`} 
                                  className={`px-3 py-2 rounded-md transition font-medium ${
                                    location.pathname === `/${lng || "en"}${item.route}`
                                      ? "text-white bg-[#ff4800]"
                                      : "hover:text-white hover:bg-gray-800 dark:text-white text-gray-800"
                                  }`}
                                >
                                  {t(item.name)}
                                </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-2xl font-semibold text-[#ff4800]">
              {t("footer.newsletter")}
            </h3>
            <p className="text-gray-400">
              {t("footer.newsletter_description")}
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder={t("footer.email_placeholder")}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-[#ff4800] focus:border-[#ff4800]"
              />
              <Button type="submit" className="bg-[#ff4800] hover:opacity-95">
                {t("footer.sign_up")}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">{t("footer.copyright")}</p>
          </div>
          <div className="flex space-x-4">
            <Link to="/privacy" className="transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link to="/terms" className="transition-colors">
              {t("footer.terms")}
            </Link>
            <Link to="/faqs" className="transition-colors">
              {t("footer.faqs")}
            </Link>
            <Link to="/help" className="transition-colors">
              {t("footer.help")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import About1 from "../components/about/about";
import WhyChooseUs from "../components/about/about2";
import TeamMemberCard from "../components/about/about3";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="font-sans">
      {/* Breadcrumbs */}
      <div className="bg-gray-100 py-4 dark:bg-gray-800">
        <div className="container mx-auto px-4 flex items-center text-sm">
          <Link
            to="/"
            className="flex items-center text-[#ff4800] hover:text-[#ff6a00]"
          >
            <FaHome className="mr-2" />
            {t("home")}
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">{t("about")}</span>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="relative h-64 md:h-96 w-full bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://themewagon.github.io/faster/img/header.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("about")}
          </h1>
          <div className="flex justify-center">
            <nav className="flex items-center text-white">
              <Link to="/" className="hover:text-[#ff4800] transition">
                {t("home")}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-[#ff4800]">{t("about")}</span>
            </nav>
          </div>
        </div>
      </div>
      <About1 />
      <WhyChooseUs />
      <TeamMemberCard />
    </div>
  );
};

export default AboutPage;

import React from "react";
import { useTranslation } from "react-i18next";
import { FaSearch, FaTruck } from "react-icons/fa";
import { Button } from "../components/ui/button";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div
      className="relative h-[600px] w-full bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://themewagon.github.io/faster/img/header.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl text-white">
          <div className="flex items-center gap-2 mb-4">
            <FaTruck className="text-[#ff4800] text-2xl" />
            <span className="font-semibold tracking-wider">
              {t("safe_faster")}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t("logistics_services")}
          </h1>

          <div className="bg-white p-1 rounded-md flex max-w-md mb-8">
            <input
              type="text"
              placeholder={t("tracking_id")}
              className="flex-1 px-4 py-3 outline-none text-gray-800"
            />

            <Button
              className="bg-[#ff4800] hover:bg-[#ff6a00] text-white px-6"
            >
              <FaSearch className="mr-2" />
              {t("track_trace")}
            </Button>
          </div>

          <div className="flex gap-4">
            <Button className="bg-[#ff4800] hover:bg-[#ff6a00] text-white px-8 py-4">
              {t("get_quote")}
            </Button>
            <Button
              variant="outline"
              className="text-black border-white hover:bg-white/10 px-8 py-4 hover:text-white"
            >
              {t("learn_more")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import React from "react";
import { useTranslation } from "react-i18next";
import { FaSearch, FaTruck } from "react-icons/fa";
import { Button } from "../components/ui/button";
import About1 from "../components/about/about";
import { Service1 } from "../components/service/service1";
import Service2 from "../components/service/service2";
import WhyChooseUs from "../components/about/about2";
import DeliveryTeam from "../components/about/about3";
import TestimonialCarousel from "../components/service/corusel";
import PricingPlans from "../components/price/price1";
import { BlogSection } from "../components/blog/blog";
import { motion } from "framer-motion";


const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <>



    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative h-[600px] w-full bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('https://themewagon.github.io/faster/img/header.jpg')",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black/50"
      />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-2 mb-4"
          >
            <FaTruck className="text-[#ff4800] text-2xl" />
            <span className="font-semibold tracking-wider">
              {t("safe_faster")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            {t("logistics_services")}
          </motion.h1>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white p-1 rounded-md flex max-w-md mb-8"
          >
            <input
              type="text"
              placeholder={t("tracking_id")}
              className="flex-1 px-4 py-3 outline-none text-gray-800"
            />
            <Button className="bg-[#ff4800] hover:bg-[#ff6a00] text-white px-6">
              <FaSearch className="mr-2" />
              {t("track_trace")}
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex gap-4"
          >
            <Button className="bg-[#ff4800] hover:bg-[#ff6a00] text-white px-8 py-4">
              {t("get_quote")}
            </Button>
            <Button
              variant="outline"
              className="text-black border-white hover:bg-white/10 px-8 py-4 hover:text-white"
            >
              {t("learn_more")}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
      <About1 />
      <Service1 />
      <Service2 />
      <WhyChooseUs />
      <PricingPlans/>
      <DeliveryTeam />
      <TestimonialCarousel />
      <BlogSection/>
    </>
  );
};

export default HeroSection;

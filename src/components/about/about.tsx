import React from "react";
import { useTranslation } from "react-i18next";
import Image from "../..//assets/about1.png";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const About1 = () => {
  const { t } = useTranslation();


  return (
    <div className="container mx-auto px-4 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              {/* Image Section */}
              
        <motion.div
          className="w-full lg:w-1/2 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={Image}
            alt={t("about_image_alt")}
            className="rounded-xl shadow-xl w-full h-auto max-h-[370px] object-cover"
          />

          <motion.div
            className="absolute bottom-4 right-4 bg-[#ff4800] text-white px-6 py-4 rounded-xl shadow-lg flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-3xl font-extrabold">25+</span>
            <p className="text-sm font-medium">{t("years_experience")}</p>
          </motion.div>


        </motion.div>

        {/* Content Section */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-[#ff4800] mb-2">
            {t("about")}
          </h3>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-6">
            {t("trusted_provider")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {t("description")}
          </p>

          <motion.button
            className="flex items-center gap-2 bg-[#ff4800] hover:bg-[#ff6a00] text-white px-6 py-3 rounded-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaPlay className="text-sm" />
            <span>{t("play_video")}</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About1;

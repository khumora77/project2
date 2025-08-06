import React from "react";
import { FaPlane, FaShip, FaTruck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoStorefront } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Service2 = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <FaPlane className="text-4xl" />,
      title: t("services.air_freight"),
      description: t("services.air_freight_desc"),
    },
    {
      icon: <FaShip className="text-4xl" />,
      title: t("services.ocean_freight"),
      description: t("services.ocean_freight_desc"),
    },
    {
      icon: <FaTruck className="text-4xl" />,
      title: t("services.land_transport"),
      description: t("services.land_transport_desc"),
    },
    {
      icon: <IoStorefront className="text-4xl" />,
      title: t("services.cargo_storage"),
      description: t("services.cargo_storage_desc"),
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h1
          variants={item}
          className="text-xl uppercase text-[#ff4800] font-bold mb-2"
        >
          {t("services.our_services")}
        </motion.h1>
        <motion.p
          variants={item}
          className="text-4xl font-bold text-gray-800 dark:text-white"
        >
          {t("services.best_logistic")}
        </motion.p>
      </div>

      <motion.div
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <motion.div
                className="bg-[#ff4800] p-6 flex justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span className="text-white" whileHover={{ rotate: 10 }}>
                  {service.icon}
                </motion.span>
              </motion.div>
              <div className="p-6 h-[200px]">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    to="/services"
                    className="inline-block text-[#ff4800] font-medium border-b border-transparent hover:border-[#ff4800] transition-all duration-200"
                  >
                    {t("services.read_more")}
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Service2;

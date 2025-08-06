import React from "react";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "../../assets/about2.png";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t("best_industry"),
      description: t("best_industry_desc"),
    },
    {
      title: t("emergency_services"),
      description: t("emergency_services_desc"),
    },
    {
      title: t("customer_support"),
      description: t("customer_support_desc"),
    },
  ];

  return (
    <section className="bg-[#f2f2f4] dark:bg-gray-900 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT: IMAGE */}
          <div className="w-full lg:w-1/2 relative">
            <img
              src={Image}
              alt={t("about_image_alt")}
              className="rounded-lg shadow-xl w-full max-w-[445px] h-auto lg:h-[550px] object-cover mx-auto"
            />
          </div>

          {/* RIGHT: TEXT CONTENT */}
          <div className="w-full lg:w-1/2">
            <motion.h2
              className="text-2xl font-bold text-[#ff4800] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {t("why_choose_us")}
            </motion.h2>

            <motion.h3
              className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t("services_title")}
            </motion.h3>

            <motion.p
              className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t("services_description")}
            </motion.p>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-3">
                    <div className="bg-[#ff4800]/10 p-2 rounded-full mr-4">
                      <FaCheck className="text-[#ff4800] text-lg" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

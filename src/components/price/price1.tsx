import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function PricingPlans() {
  const { t } = useTranslation();

  const plans = [
    {
      price: 49,
      name: t("pricing.basic.name"),
      features: [
        t("pricing.features.html_css"),
        t("pricing.features.bootstrap"),
        t("pricing.features.responsive"),
        t("pricing.features.browsers"),
      ],
    },
    {
      price: 99,
      name: t("pricing.premium.name"),
      features: [
        t("pricing.features.html_css"),
        t("pricing.features.bootstrap"),
        t("pricing.features.responsive"),
        t("pricing.features.browsers"),
      ],
    },
    {
      price: 149,
      name: t("pricing.business.name"),
      features: [
        t("pricing.features.html_css"),
        t("pricing.features.bootstrap"),
        t("pricing.features.responsive"),
        t("pricing.features.browsers"),
      ],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm text-orange-600 font-semibold"
        >
          {t("pricing.section_title")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-2 text-3xl font-bold text-gray-900 dark:text-white"
        >
          {t("pricing.heading")}
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4 + idx * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex flex-col border dark:border-gray-700 overflow-hidden"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="p-8 bg-gray-200 dark:bg-gray-700"
              >
                <span className="text-gray-600 dark:text-gray-300 text-xl align-top mr-1">
                  $
                </span>
                <span className="text-5xl font-extrabold text-gray-800 dark:text-white">
                  {plan.price}
                </span>
                <span className="text-gray-600 dark:text-gray-300 text-lg align-top">
                  /{t("pricing.month")}
                </span>
              </motion.div>

              <div className="bg-orange-600 py-3">
                <h3 className="text-center text-lg font-bold text-white">
                  {plan.name}
                </h3>
              </div>

              <div className="p-6 flex-grow flex flex-col items-center space-y-3 text-gray-600 dark:text-gray-300">
                {plan.features.map((feature, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    {feature}
                  </motion.p>
                ))}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 4px 6px -1px rgba(249, 115, 22, 0.4), 0 2px 4px -1px rgba(249, 115, 22, 0.06)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition"
                >
                  {t("pricing.order_now")}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

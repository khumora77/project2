import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function DeliveryTeam() {
  const { t } = useTranslation();

  const team = [
    {
      img: "https://themewagon.github.io/faster/img/team-1.jpg",
      name: t("team.member1.name"),
      designation: t("team.member1.position"),
    },
    {
      img: "https://themewagon.github.io/faster/img/team-2.jpg",
      name: t("team.member2.name"),
      designation: t("team.member2.position"),
    },
    {
      img: "https://themewagon.github.io/faster/img/team-3.jpg",
      name: t("team.member3.name"),
      designation: t("team.member3.position"),
    },
    {
      img: "https://themewagon.github.io/faster/img/team-4.jpg",
      name: t("team.member4.name"),
      designation: t("team.member4.position"),
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.5 }}
      className="py-12 bg-[#f2f2f4] dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm text-orange-600 font-semibold"
        >
          {t("team.section_title")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-3xl font-bold dark:text-white"
        >
          {t("team.heading")}
        </motion.h2>

        <motion.div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3 + idx * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md flex flex-col"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>

              <div className="p-4 flex flex-col flex-grow">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="font-semibold text-gray-900 dark:text-white"
                >
                  {member.name}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="text-gray-500 dark:text-gray-300"
                >
                  {member.designation}
                </motion.p>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="mt-auto border-b-4 border-orange-600 w-full rounded-sm"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

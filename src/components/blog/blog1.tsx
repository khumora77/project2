import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

const blogPosts = [
  {
    id: 1,
    author: "blog2.author1",
    category: "blog2.category1",
    date: "blog2.date1",
    title: "blog2.title1",
    description: "blog2.description1",
    image: "https://themewagon.github.io/faster/img/blog-1.jpg",
  },
  {
    id: 2,
    title: "blog2.title2",
    description: "blog2.description2",
    image: "https://themewagon.github.io/faster/img/blog-2.jpg",
  },
];

function Blog1() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto p-6 space-y-16 bg-gray-50 dark:bg-gray-900 min-h-screen"
    >

      <motion.article
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 overflow-hidden"
      >
        <motion.img
          src={blogPosts[0].image}
          alt={t("blog2.imageAlt")}
          className="w-full h-64 object-cover rounded-t-lg"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        />

        <header className="flex items-center justify-between mt-6 mb-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage
                src={blogPosts[0].image}
                alt={t(blogPosts[0].author)}
              />
            </Avatar>
            <div>
              <p className="font-semibold text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">
                {t(blogPosts[0].author)}
              </p>
              <Badge
                variant="outline"
                className="text-orange-500 dark:text-orange-400 border-orange-500 dark:border-orange-400"
              >
                {t(blogPosts[0].category)}
              </Badge>
            </div>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-orange-500 dark:bg-orange-600 text-white font-bold px-4 py-2 rounded-full text-center"
          >
            {t(blogPosts[0].date)}
          </motion.div>
        </header>

        <motion.h2
          className="text-3xl font-bold mb-4 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {t(blogPosts[0].title)}
        </motion.h2>

        <motion.p
          className="text-gray-700 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {t(blogPosts[0].description)}
        </motion.p>
      </motion.article>

      {/* Second Blog Post */}
      <motion.article
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        whileHover={{ scale: 1.01 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 space-y-8"
      >
        <motion.div
          className="flex flex-col md:flex-row gap-8 items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.img
            src={blogPosts[0].image}
            alt={t("blog2.imageAlt")}
            className="w-full md:w-1/3 rounded-lg object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
          <motion.p
            className="text-gray-700 dark:text-gray-300 leading-relaxed flex-1 text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {t("blog2.additionalContent1")}
          </motion.p>
        </motion.div>

        <motion.h3
          className="font-semibold text-xl dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {t(blogPosts[1].title)}
        </motion.h3>

        <motion.div
          className="flex flex-col md:flex-row gap-8 items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.p
            className="text-gray-700 dark:text-gray-300 leading-relaxed w-full md:w-2/3 text-justify"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {t(blogPosts[1].description)}
          </motion.p>
          <motion.img
            src={blogPosts[1].image}
            alt={t("blog2.imageAlt")}
            className="w-full md:w-1/3 rounded-lg object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.article>
    </motion.div>
  );
}

export default Blog1;

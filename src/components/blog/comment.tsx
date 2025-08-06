import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

export function CommentForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:3000/comments", formData);
      setIsSuccess(true);
      setFormData({ name: "", email: "", website: "", message: "" });
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Error submitting comment:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants (siz bergan)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h3
        className="text-2xl font-bold mb-6 dark:text-white"
        variants={itemVariants}
      >
        {t("commentForm.title")}
      </motion.h3>

      <motion.form
        className="space-y-4"
        variants={containerVariants}
        onSubmit={handleSubmit}
      >
        <motion.div variants={itemVariants}>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t("commentForm.nameLabel")} *
          </label>
          <Input
            id="name"
            type="text"
            required
            className="w-full dark:bg-gray-700 dark:border-gray-600"
            placeholder={t("commentForm.namePlaceholder")}
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t("commentForm.emailLabel")} *
          </label>
          <Input
            id="email"
            type="email"
            required
            className="w-full dark:bg-gray-700 dark:border-gray-600"
            placeholder={t("commentForm.emailPlaceholder")}
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label
            htmlFor="website"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t("commentForm.websiteLabel")}
          </label>
          <Input
            id="website"
            type="url"
            className="w-full dark:bg-gray-700 dark:border-gray-600"
            placeholder={t("commentForm.websitePlaceholder")}
            value={formData.website}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {t("commentForm.messageLabel")} *
          </label>
          <Textarea
            id="message"
            required
            rows={5}
            className="w-full dark:bg-gray-700 dark:border-gray-600"
            placeholder={t("commentForm.messagePlaceholder")}
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
          >
            {isSubmitting
              ? t("commentForm.submitting")
              : t("commentForm.submitButton")}
          </Button>
        </motion.div>
      </motion.form>

      {isSuccess && (
        <p className="mt-4 text-green-600 dark:text-green-400">
          {t("commentForm.successMessage")}
        </p>
      )}
    </motion.div>
  );
}
  
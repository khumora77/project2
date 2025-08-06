import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export function Service1() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:3000/quotes", formData);
      setIsSuccess(true);
      setFormData({ name: "", email: "", service: "" });
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    t("services1.web_dev"),
    t("services1.mobile_dev"),
    t("services1.ui_ux"),
    t("services1.digital_marketing"),
    t("services1.seo"),
    t("services1.consulting"),
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="py-12 px-4 sm:px-6 lg:px-8 bg-[#f2f2f4] dark:dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Stats Section */}
        <motion.div className="space-y-8">
          <motion.div className="space-y-4">
            <h2 className="text-xl font-bold text-[#ff4800]">
              {t("quote.get_quote")}
            </h2>
            <h2 className="text-3xl font-bold">{t("quote.request_quote")}</h2>
            <p className="text-muted-foreground">{t("quote.description")}</p>
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
            >
              <p className="text-3xl font-bold text-[#ff4800]">225</p>
              <p className="text-muted-foreground">{t("stats.experts")}</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
            >
              <p className="text-3xl font-bold text-[#ff4800]">1050</p>
              <p className="text-muted-foreground">{t("stats.clients")}</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
            >
              <p className="text-3xl font-bold text-[#ff4800]">2500</p>
              <p className="text-muted-foreground">{t("stats.projects")}</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Form Section */}
        <motion.div className="bg-gray-50 dark:dark:bg-gray-900 p-6 rounded-lg shadow-sm dark:rounded-lg dark:shadow-sm">
          <motion.h3 className="text-xl font-semibold mb-6">
            {t("quote.get_quote")}
          </motion.h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                {t("form.name")}
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={t("form.name_placeholder")}
              />
            </motion.div>

            <motion.div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                {t("form.email")}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={t("form.email_placeholder")}
              />
            </motion.div>

            <motion.div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {t("form.select_service")}
              </label>
              <Select
                onValueChange={handleServiceChange}
                value={formData.service}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t("form.service_placeholder")} />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>

            <motion.div>
              <Button
                type="submit"
                className="w-full bg-[#ff4800] hover:opacity-90"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? t("form.submitting") : t("form.submit")}
              </Button>

              {isSuccess && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-green-600 text-sm text-center mt-2"
                >
                  {t("form.success_message")}
                </motion.p>
              )}
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}

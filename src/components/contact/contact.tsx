import { useTranslation } from "react-i18next";
import { useState } from "react";
import axios from "axios";

export function ContactSection() {
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



   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);

     try {
       await axios.post("http://localhost:3000/contacts", formData);
       setIsSuccess(true);
       setFormData({ name: "", email: "", service: "" });
       setTimeout(() => setIsSuccess(false), 3000);
     } catch (error) {
       console.error("Error submitting form:", error);
     } finally {
       setIsSubmitting(false);
     }
   };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Map and address */}
      <div className="relative">
        <div className="bg-orange-600 text-white font-semibold p-4 rounded-t dark:bg-orange-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a8 8 0 0011.314-11.314l-4.243 4.243z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {t("contact1.address")}
        </div>
        <iframe
          title={t("contact1.map_title")}
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11979.03090271621!2d69.11066212290473!3d41.35761944705467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1754571400326!5m2!1sru!2s"
          className="w-full h-[450px] border-0 rounded-b"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
      </div>

      {/* Contact form */}
      <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
        <p className="text-sm text-orange-600 dark:text-orange-400 font-semibold uppercase">
          {t("contact1.contact_us")}
        </p>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-8">
          {t("contact1.title")}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder={t("contact1.name_placeholder")}
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-700 dark:text-white"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("contact1.email_placeholder")}
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-700 dark:text-white"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder={t("contact1.subject_placeholder")}
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-600 dark:bg-gray-700 dark:text-white"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            rows="4"
            name="message"
            placeholder={t("contact1.message_placeholder")}
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-600 resize-none dark:bg-gray-700 dark:text-white"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-orange-600 dark:bg-orange-700 text-white font-semibold px-6 py-3 rounded hover:bg-orange-700 dark:hover:bg-orange-800 transition disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? t("contact1.sending") : t("contact1.send_button")}
          </button>
          {isSuccess && (
            <p className="text-green-600 dark:text-green-400 text-sm">
              {t("contact1.success_message")}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

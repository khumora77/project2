import React, { useState, useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function TestimonialCarousel() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: t("testimonials.client1.name"),
      profession: t("testimonials.client1.profession"),
      text: t("testimonials.client1.text"),
      avatar: "https://themewagon.github.io/faster/img/testimonial-1.jpg",
    },
    {
      name: t("testimonials.client2.name"),
      profession: t("testimonials.client2.profession"),
      text: t("testimonials.client2.text"),
      avatar: "https://themewagon.github.io/faster/img/testimonial-2.jpg",
    },
    {
      name: t("testimonials.client3.name"),
      profession: t("testimonials.client3.profession"),
      text: t("testimonials.client3.text"),
      avatar: "https://themewagon.github.io/faster/img/testimonial-3.jpg",
    },
    {
      name: t("testimonials.client4.name"),
      profession: t("testimonials.client4.profession"),
      text: t("testimonials.client4.text"),
      avatar: "https://themewagon.github.io/faster/img/testimonial-4.jpg",
    },
  ];

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-12 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-orange-500 font-semibold">
          {t("testimonials.section_title")}
        </p>
        <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
          {t("testimonials.heading")}
        </h2>

        <div className="mt-10 flex flex-col items-center">
          <div className="w-full md:w-2/3 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md transition-all duration-500">
            <div className="flex items-center mb-4">
              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                className="h-12 w-12 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {testimonials[current].name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {testimonials[current].profession}
                </p>
              </div>
              <FaQuoteRight className="ml-auto text-orange-400 h-6 w-6" />
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              {testimonials[current].text}
            </p>
          </div>

          {/* Pagination dots */}
          <div className="mt-6 flex space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`h-3 w-3 rounded-full transition-colors ${
                  idx === current
                    ? "bg-orange-500"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                onClick={() => setCurrent(idx)}
                aria-label={t("testimonials.go_to_testimonial", {
                  number: idx + 1,
                })}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { useTranslation } from "react-i18next";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";

const ContactBar = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: <FaFacebookF />, label: t("social.facebook") },
    { icon: <FaTwitter />, label: t("social.twitter") },
    { icon: <FaLinkedin />, label: t("social.linkedin") },
    { icon: <TiSocialInstagram />, label: t("social.instagram") },
    { icon: <FaYoutube />, label: t("social.youtube") }, // Fixed label from instagram to youtube
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-2 px-4 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Contact information */}
        <div className="flex items-center space-x-4 mb-2 md:mb-0">
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <FaPhone className="mr-1" />
            <span>+012 345 6789</span>
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <FaEnvelope className="mr-1" />
            <span>info@example.com</span>
          </div>
        </div>

        {/* Social links */}
        <div className="flex items-center space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              aria-label={link.label}
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 text-lg"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactBar;

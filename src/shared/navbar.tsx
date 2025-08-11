import React from "react";
import Mobile from "./mobile";
import { useTranslation } from "react-i18next";
import { FaTruck } from "react-icons/fa";
import { navLinks } from "../constants";
import { Link, useParams, useLocation } from "react-router-dom";
import { UserButton, SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import ModeToggle from "./mode-toggle";
import { Button } from "../components/ui/button";
import LanguageDropdown from "./languageMenu";

const Navbar = () => {
  const { t } = useTranslation();
  const { lng } = useParams(); // Hozirgi til
  const location = useLocation(); // URL ni olish

  return (
    <div className="fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto max-w-7xl h-full flex justify-between items-center border-b">
        <div className="flex items-center gap-4">
          <Link
            to={`/${lng || "en"}`} // Til bo‘lmasa, default en
            className="flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <FaTruck className="text-3xl text-[#ff4800]" />
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-[#ff4800] to-[#ff8c00] bg-clip-text text-transparent">
              FASTER
            </h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((item) => (
              <Link
                key={item.route}
                to={`/${lng || "en"}${item.route}`} // Tilni qo‘shdik
                className={`px-3 py-2 rounded-md transition font-medium ${
                  location.pathname === `/${lng || "en"}${item.route}`
                    ? "text-white bg-[#ff4800]"
                    : "hover:text-white hover:bg-gray-800 dark:text-white text-gray-800"
                }`}
              >
                {t(item.name)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Mobile />
          <div className="flex max-md:hidden items-center gap-2 border-r pr-3">
            <LanguageDropdown />
            <ModeToggle />
          </div>
          <div className="max-sm:hidden">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm" className="rounded-full">
                  {t("logIn")}
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button variant="ghost" size="sm" className="rounded-full">
                  {t("signUp")}
                </Button>
              </SignUpButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

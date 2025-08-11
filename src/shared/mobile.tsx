import { useState } from "react";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { AlignCenter, ShoppingCart } from "lucide-react";
import { useTranslation } from "react-i18next";
import { navLinks } from "../constants";
import ModeToggle from "./mode-toggle";
import { Link, useParams, useLocation } from "react-router-dom";
import LanguageDropdown from "./languageMenu";

function Mobile() {
  const { t } = useTranslation();
  const { lng } = useParams();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button size={"icon"} variant={"ghost"}>
          <AlignCenter />
        </Button>
      </SheetTrigger>
      <SheetContent side={"top"}>
        <SheetHeader>
          <SheetTitle asChild>
            <h1 className="text-xl text-foreground font-roboto">OnlyCourses</h1>
          </SheetTitle>
          <Separator />{navLinks.map((item) => (
  <Link
    key={item.route}
    to={`/${lng || "en"}${item.route}`} 
    onClick={() => {
      window.scrollTo({ top: 0, behavior: "smooth" }); // sahifa boshiga
      setOpen(false); // menyuni yopish
    }}
    className={`px-3 py-2 rounded-md transition font-medium ${
      location.pathname === `/${lng || "en"}${item.route}`
        ? "text-white bg-[#ff4800]"
        : "hover:text-white hover:bg-gray-800 dark:text-white text-gray-800"
    }`}
  >
    {t(item.name)}
  </Link>
))}
        </SheetHeader>
        <div className="mt-4 flex flex-col space-y-3">

          <LanguageDropdown />
          <div className="flex items-center justify-center gap-4">
            <Button size={"icon"} variant={"ghost"}>
              <ShoppingCart />
            </Button>
            <ModeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Mobile;

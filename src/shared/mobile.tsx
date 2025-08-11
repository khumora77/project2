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
import { Link } from "react-router-dom";

function Mobile() {
  const { t } = useTranslation();

  return (
    <Sheet>
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
          <Separator />
        </SheetHeader>
        <div className="mt-4 flex flex-col space-y-3">
          {navLinks.map((nav) => (
            <Link
              to={`/${nav.route}`}
              key={nav.route}
              className="flex h-12 cursor-pointer items-center gap-2 rounded-sm px-3 transition-colors hover:bg-blue-400/20"
            >
              <span>{t(nav.name)}</span>
            </Link>
          ))}
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
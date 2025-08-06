import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // Ikkala ikonka kerak
import { Button } from "../components/ui/button"; // Sizning mavjud Button komponentingiz

const ModeToggle = () => {
  const [theme, setTheme] = useState("light");

  // Brauzerdan avvalgi holatni o'qib olish
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <Button  size={"icon"} onClick={toggleTheme}>
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
};

export default ModeToggle;

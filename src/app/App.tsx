import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home";
import Navbar from "../shared/navbar";
import About from "../pages/about";
import ContactBar from "../shared/header";
import ServicePage from "../pages/service";
import Price from "../pages/price";
import Blog from "../pages/blog";
import Contact from "../pages/contact";
import { Footer } from "../shared/footer";
import ScrollToTopButton from "../shared/scrolltop";

const App = () => {
  return (
    <div>
      <ContactBar />
      <Navbar />
      <Routes>
        {/* Default tilga yo‘naltirish */}
        <Route path="/" element={<Navigate to="/en" />} />

        {/* Til parametri bo'lgan barcha sahifalar */}
        <Route path="/:lng" element={<Home />} />
        <Route path="/:lng/about" element={<About />} />
        <Route path="/:lng/services" element={<ServicePage />} />
        <Route path="/:lng/price" element={<Price />} />
        <Route path="/:lng/blog" element={<Blog />} />
        <Route path="/:lng/contact" element={<Contact />} />

        {/* Agar boshqa yo‘l bo‘lsa — defaultga qaytarish */}
        <Route path="*" element={<Navigate to="/en" />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;

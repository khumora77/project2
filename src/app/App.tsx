import React from "react";
import { Route, Routes } from "react-router-dom";
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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/price" element={<Price />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;

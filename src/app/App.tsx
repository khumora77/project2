import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/home";
import Navbar from "../shared/navbar";
import Back from "../assets/image.png";

const App = () => {
  const location = useLocation();

  const showBackground = location.pathname === "/";

  return (
    <div
      style={
        showBackground
          ? {
              backgroundImage: `url(${Back})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "100vh",
            }
          : {}
      }
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* boshqa routelar */}
      </Routes>
    </div>
  );
};

export default App;

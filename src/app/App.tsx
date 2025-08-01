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
      className=""
      style={
        showBackground
          ? {
              backgroundImage: `url(${Back})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "100vh",
              height: "700px",
            }
          : {}
      }
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

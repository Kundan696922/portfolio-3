import React from "react";
import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";
import "aos/dist/aos.css";
import AOS from "aos";

// Initialize AOS
AOS.init({
  duration: 1000, // animation duration in ms
  once: true, // whether animation should happen only once
});

const App = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24" />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;

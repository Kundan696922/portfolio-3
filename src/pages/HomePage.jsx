import React, { useState, useEffect } from "react";
import "../loader.css"; // custom loader
import Navbar from "../components/Navbar";
import HomeSection from "../sections/HomeSection";
import AboutSection from "../sections/AboutSection";
import ExperienceSection from "../sections/ExperienceSection";
import ProjectsSection from "../sections/ProjectsSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-base-100">
        <div className="loader"></div>
        <p className="mt-1 text-lg font-semibold text-primary animate-pulse text-center px-4">
          Loading portfolio...
        </p>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;

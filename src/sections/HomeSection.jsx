import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";
import { Download } from "lucide-react";


const HomeSection = () => {

  return (
    <section
      id="home"
      className="flex items-center justify-center md:min-h-screen text-center bg-base-100 mt-6"
    >
      <div className="container mx-auto px-4" data-aos="fade-up">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Hey I am <span className="text-primary font-mono">Kundan</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl mt-4">
          A <span className="text-secondary font-semibold">MERN Stack</span>{" "}
          Developer
        </p>

        {/* Centered Lottie Animation */}
        <div className="flex justify-center mt-8">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            style={{ width: 300, height: 300 }}
          />
        </div>

        {/* Resume Button */}
        <a
          href="/assets/Kundan_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary text-white font-medium rounded-lg shadow hover:bg-primary/90 transition"
        >
          <Download className="w-5 h-5" />
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default HomeSection;

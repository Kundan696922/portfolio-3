import React from "react";
import profilePic from "../assets/my_dp.png"; // Replace with your actual photo

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-base-100"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12" data-aos="fade-up">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
              About <span className="text-primary">Me</span>
            </h2>

            <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-4 text-justify">
              I am a{" "}
              <span className="font-semibold text-primary">
                MERN Stack Developer
              </span>{" "}
              with 20+ GitHub projects, from simple UI pages to full-stack apps.
              I build responsive interfaces, secure REST APIs, and scalable
              applications, with experience in authentication, state management,
              and modern UI frameworks.
            </p>

            <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-4 text-justify">
              Here are some technologies I have been working with:
            </p>

            {/* Skills List */}
            <ul
              className="list-disc list-inside grid grid-cols-2 gap-2 mb-6 pl-2"
              data-aos="fade-up"
            >
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>Javascript ES6+</li>
            </ul>

            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-justify">
              Outside of coding, I enjoy hitting the gym, exploring new games,
              and watching movies, activities that keep me sharp, creative, and
              relaxed.
            </p>

            <p className="mt-6 font-semibold text-primary text-center md:text-left">
              — Kundan Goyary
            </p>
          </div>

          {/* Right Side - Profile Image */}
          <div className="hidden md:flex justify-center">
            <img
              src={profilePic}
              alt="Kundan"
              className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

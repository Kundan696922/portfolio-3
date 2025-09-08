import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-base-100 text-gray-800 dark:text-gray-200 py-6">
      <div
        className="container mx-auto flex flex-col items-center justify-center gap-4 "
        data-aos="fade-up"
      >
        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/Kundan696922"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/kundan-goyary/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:kgoyary824@gmail.com"
            className="hover:text-indigo-500 transition"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
          &copy; {new Date().getFullYear()} Kundan Goyary. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

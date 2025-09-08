import React from "react";
import { Briefcase } from "lucide-react";
import codtechLogo from "../assets/codtech_logo.jpeg";
import nielitLogo from "../assets/nielit_guwahati_logo.jpeg";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "CODTECH IT SOLUTIONS",
      role: "Frontend Developer Intern",
      date: "June 2024 - July 2024",
      logo: codtechLogo,
      tasks: [
        "Built responsive and interactive web applications, including a portfolio site and task management app with persistent local storage, improving usability across devices.",
        "Managed code versioning through GitHub and followed agile workflows, ensuring timely delivery and smooth collaboration on assigned projects."
      ],
    },
    {
      company: "NIELIT Guwahati",
      role: "Machine Learning Intern",
      date: "June 2023 - July 2023",
      logo: nielitLogo,
      tasks: [
        "Completed training in Python programming and machine learning, applying concepts to real-world data-driven problem solving.",
        "Developed a leaf disease detection system using image processing and ML libraries, enabling accurate identification of plant health conditions."
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center bg-base-100 py-16"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 flex items-center justify-center gap-2">
          My Work Experience <Briefcase className="w-7 h-7 text-primary" />
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-primary/40 pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative" data-aos="fade-up">
              {/* Dot */}
              <div className="absolute -left-5 top-2 w-4 h-4 rounded-full bg-primary border-2 border-white shadow"></div>

              {/* Content */}
              <div className="bg-base-200 rounded-xl p-6 shadow hover:shadow-lg transition">
                <h5 className="flex items-center gap-3 text-base md:text-xl font-semibold mb-1">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-8 h-8 object-cover rounded-full border"
                  />
                  {exp.company}
                </h5>
                <h6 className="text-lg font-medium text-secondary mb-1">
                  {exp.role}
                </h6>
                <p className="text-sm text-gray-500 mb-4">{exp.date}</p>

                <ul className="list-disc list-outside pl-5 space-y-2 text-left text-base-content/80">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

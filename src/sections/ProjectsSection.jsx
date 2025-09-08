import React from "react";
import ProjectCard from "../components/ProjectCard";

// Import images
import fitrackImg from "../assets/fitrack.png";
import noteboardImg from "../assets/noteboard.png";
import cinescopeImg from "../assets/cinescope.png";
import budgetwiseImg from "../assets/budgetwise.png";
import codeEditorImg from "../assets/code-editor.png";
import shopmateImg from "../assets/shopmate.png";

const projects = [
  {
    title: "MERN Product Store App",
    description:
      "FitRack is a Full-Stack Product Store App built with the MERN stack",
    tools: "React, Tailwind, Node.js, Express, MongoDB",
    image: fitrackImg,
    demo: "https://fitrack-4hif.onrender.com/",
    github: "https://github.com/Kundan696922/fitrack",
    icon: "dumbbell",
  },
  {
    title: "MERN Stack Note Taking App",
    description:
      "NoteBoard is a Full-Stack Note Taking App built with the MERN stack.",
    tools: "React, Tailwind, Node.js, Express, MongoDB",
    image: noteboardImg,
    demo: "https://noteboard-6618.onrender.com/",
    github: "https://github.com/Kundan696922/noteboard",
    icon: "note",
  },
  {
    title: "Movie Discovery Web App",
    description:
      "CineScope is a sleek and responsive movie discovery app built with React, Vite, and Bootstrap.",
    tools: "React, Bootstrap, HTML",
    image: cinescopeImg,
    demo: "https://cinescope23.netlify.app/",
    github: "https://github.com/Kundan696922/cinescope",
    icon: "movie",
  },
  {
    title: "Expense Tracker App",
    description:
      "Budgetwise is a responsive expense tracker web app built using React and Bootstrap.",
    tools: "React, Bootstrap, HTML",
    image: budgetwiseImg,
    demo: "https://budgetwise69.netlify.app/",
    github: "https://github.com/Kundan696922/budgetwise",
    icon: "expense",
  },
  {
    title: "Simple Code Editor",
    description:
      "Quantum Editor is a web-based code editor built using HTML, CSS, JavaScript, and CodeMirror 5.",
    tools: "HTML, CSS, JS",
    image: codeEditorImg,
    demo: "https://quantum-editor.netlify.app/",
    github: "https://github.com/Kundan696922/simple-code-editor",
    icon: "code",
  },
  {
    title: "Shopping List",
    description:
      "ShopMate is a responsive and user-friendly Shopping List web app built using ReactJS + Bootstrap.",
    tools: "HTML, React, Bootstrap",
    image: shopmateImg,
    demo: "https://shopmate34.netlify.app/",
    github: "https://github.com/Kundan696922/shopmate",
    icon: "shop",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-12 px-4"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 underline decoration-primary">
        These are some of my projects
      </h2>

      <div className="grid gap-6 justify-center items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div key={idx} className="max-w-xs" data-aos="fade-up">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div className="mt-8">
        <a
          href="https://github.com/Kundan696922?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
        >
          Show All Projects
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;

import React from "react";
import {
  Github,
  Laptop,
  ExternalLink,
  Handbag,
  Clapperboard,
  Wallet,
  Code,
  ShoppingCart,
  Dumbbell,
} from "lucide-react";

const iconMap = {
  bag: Handbag,
  movie: Clapperboard,
  expense: Wallet,
  code: Code,
  shop: ShoppingCart,
  dumbbell: Dumbbell,
};

const ProjectCard = ({ project }) => {
  const Icon = iconMap[project.icon] || Laptop;

  return (
    <div className="bg-white dark:bg-primary-content shadow-lg rounded-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={project.image}
        alt={project.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4 flex flex-col flex-1">
        <h5 className="flex items-center text-lg font-semibold mb-2">
          <Icon className="mr-2 text-indigo-500" size={20} />
          {project.title}
        </h5>
        <p className="text-gray-600 dark:text-gray-300 flex-1">
          {project.description}
        </p>
        <p className="mt-2 font-medium">Tools: {project.tools}</p>
        <div className="mt-4 flex gap-2">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
          >
            <ExternalLink size={16} /> Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

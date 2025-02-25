import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Built a full-stack e-commerce platform using Next.js, Node.js, and MongoDB. Implemented features like user authentication, product catalog, and payment integration.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    link: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    title: "Task Management App",
    description:
      "Developed a React-based task management application with a drag-and-drop interface. Integrated with a backend API for data persistence and real-time updates.",
    technologies: ["React", "Redux", "Express", "Socket.io"],
    link: "https://github.com/yourusername/task-manager",
  },
  {
    title: "Weather Forecast Dashboard",
    description:
      "Created a weather forecast dashboard that pulls data from multiple APIs. Implemented data visualization using D3.js and geolocation features.",
    technologies: ["Vue.js", "D3.js", "OpenWeatherMap API"],
    link: "https://github.com/yourusername/weather-dashboard",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button
                variant="outline"
                className="mt-4 text-black hover:bg-blue-500 hover:text-white transition-colors duration-300"
                asChild
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

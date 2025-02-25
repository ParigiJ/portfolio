import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    period: "2022 - Present",
    description:
      "Led development of scalable web applications using React and Node.js. Implemented CI/CD pipelines and mentored junior developers.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2019 - 2022",
    description:
      "Developed and maintained multiple client projects. Worked with React, Express, and MongoDB to create full-stack applications.",
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    period: "2017 - 2019",
    description:
      "Started career building responsive websites. Gained proficiency in HTML, CSS, JavaScript, and basic backend technologies.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-blue-300 mb-2">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

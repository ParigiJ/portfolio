import React from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Prisma", icon: <SiPrisma /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl shadow-lg mt-8"
    >
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-white/10 rounded-lg p-4 backdrop-blur-sm flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="text-3xl mb-2">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

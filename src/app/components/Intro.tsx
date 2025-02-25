import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section
      id="intro"
      className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl shadow-lg"
    >
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I&apos;m Jagan. I&apos;m a software developer.
      </motion.h1>
      <motion.p
        className="text-lg mb-6 max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I&apos;m a software developer with a passion for building things.
      </motion.p>
      <div className="flex gap-4">
        <Button
          variant="secondary"
          className="hover:bg-black hover:text-white"
          asChild
        >
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </Button>
        <Button
          variant="default"
          className="text-white bg-black hover:bg-white hover:text-black"
          asChild
        >
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </Button>
        <Button
          className="text-black bg-white hover:bg-black hover:text-white"
          asChild
        >
          <a href="#contact">Contact Me</a>
        </Button>
      </div>
    </section>
  );
};

export default Intro;

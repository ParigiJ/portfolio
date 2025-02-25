import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-10">
          <motion.div
            className="flex-1 bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-2">
              <span className="font-bold">Phone:</span> +1 (123) 456-7890
            </p>
            <p className="mb-4">
              <span className="font-bold">Email:</span> your.email@example.com
            </p>
            <p className="text-sm">
              Feel free to reach out if you have any questions or just want to
              say hello!
            </p>
          </motion.div>
          <motion.div
            className="flex-1 bg-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <Input
                type="text"
                placeholder="Name"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-lg"
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-lg"
              />
              <Textarea
                placeholder="Your message"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-lg"
                rows={5}
              />
              <Button
                type="submit"
                className="w-full bg-white text-blue-600 hover:bg-blue-100 rounded-lg"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

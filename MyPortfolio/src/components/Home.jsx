import React from "react";
import { motion } from "framer-motion";
// Hi, I'm Sameer 👋
const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16 lg:px-24"
    >
      {/* Animated heading using Framer Motion */}

      <motion.h1
        className="text-5xl font-extrabold text-center text-blue-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Sameer 👋
      </motion.h1>

      {/* Animated paragraph with slight delay */}

      <motion.p
        className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {"</>"} A passionate full stack developer who loves coding and
        problem-solving.
      </motion.p>
    </section>
  );
};

export default Home;

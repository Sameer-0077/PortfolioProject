import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <motion.div
      className="p-10 md:p-20 bg-gradient-to-br from-blue-500 to-blue-200 text-gray-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl font-extrabold text-center text-blue-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="mt-6 text-gray-800 text-lg text-center max-w-4xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Hello! I'm <span className="font-bold text-blue-600">Sameer</span>, a
        passionate developer with a deep enthusiasm for learning and
        implementing a wide range of technologies. My expertise includes{" "}
        <span className="text-blue-700 font-semibold">
          HTML, CSS, JavaScript, React, Java
        </span>
        , and much more. I thrive on continuous learning and love exploring new
        technologies and methodologies. <br /> Let's connect and discuss how we
        can create impactful solutions together!
      </motion.p>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <h2 className="text-3xl font-bold text-center text-blue-700">Skills</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Redux",
            "Java",
            "Tailwind CSS",
            "API Integration",
          ].map((skill) => (
            <motion.div
              key={skill}
              className="p-4 bg-white rounded-xl shadow-md font-bold text-blue-900 hover:bg-blue-700 hover:text-white transition duration-300 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5 }}
      >
        <h2 className="text-3xl font-bold text-center text-blue-700">
          Education
        </h2>
        <div className="mt-6 space-y-4 text-center">
          {[
            "High School: St. Paul Public School, Deoria (2017)",
            "Intermediate: Sudama Uchchttar Madhaymik Vidyalaya, Deoria (2020)",
            "Graduation: University of Allahabad, Bachelor's of Computer Application (2023)",
          ].map((edu, index) => (
            <p
              key={index}
              className="p-4 bg-white rounded-xl shadow-md font-semibold text-gray-800 hover:bg-blue-600 hover:text-white transition duration-300"
            >
              {edu}
            </p>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
      >
        <h2 className="text-3xl font-bold text-blue-700">Connect with Me</h2>
        <div className="mt-6 flex justify-center space-x-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/sameer-yadav-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Sameer-0077"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-600 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/yourinstagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-700 hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;

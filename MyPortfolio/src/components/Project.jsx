import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const projectList = [
  {
    title: "AI Resume Builder",
    description:
      "An AI-powered resume builder that generates professional resumes from user input and allows previewing and downloading as a PDF.",
    features: [
      "AI integration to generate well-structured resume content",
      "Download resume as an A4-size PDF",
      "Responsive design with smooth animations",
    ],
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "API Integration",
      "MongoDB",
      "Gemini API",
    ],
    webLink: "https://build-ai-resume.netlify.app/", // replace with your actual link
    gitRepo: "https://github.com/Sameer-0077/AiResumeBuilder", // replace with your actual repo link
  },
  {
    title: "Community",
    description:
      "A simplified LinkedIn-like platform where users can connect, share posts, and view profiles in a public feed.",
    features: [
      "User authentication (Register/Login with Email & Password)",
      "Create and view public text-based posts",
      "Personalized profile page with user details and posts",
    ],
    techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    webLink: "https://community.example.com/", // replace with actual link if deployed
    gitRepo: "https://github.com/Sameer-0077/Community", // replace with your actual repo link
  },

  {
    title: "WeatherApp",
    description:
      "A sleek and user-friendly weather forecast application that provides real-time weather updates and a 5-day forecast for any city, powered by an external weather API.",
    features: [
      "Search and view weather details for any city worldwide",
      "5-day forecast with daily summaries",
      "Responsive design for mobile and desktop devices",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    webLink: "https://getweatherbycity.netlify.app/",
    gitRepo: "https://github.com/Sameer-0077/WeatherApp",
  },
  {
    title: "Currency Converter",
    description: "Convert currencies with real-time exchange rates.",
    features: [
      "Supports over 150 currencies",
      "Live exchange rate fetching",
      "User-friendly interface",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "API"],
    webLink: "https://getcurrencyconvertor.netlify.app/",
    gitRepo: "https://github.com/Sameer-0077/CurruncyConverter",
  },
  {
    title: "ToDo App",
    description:
      "A task management application built using React and Tailwind CSS.",
    features: ["Add tasks", "Mark tasks as completed", "Remove tasks"],
    techStack: ["HTML", "Tailwind CSS", "React", "JavaScript"],
    webLink: "https://todoapp.example.com",
    gitRepo: "https://github.com/yourusername/todo-app",
  },
  {
    title: "Tic Tac Toe",
    description: "A fun interactive game built with JavaScript.",
    features: [
      "Two-player mode",
      "Win detection",
      "Restart game functionality",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    webLink: "https://tictactoe.example.com",
    gitRepo:
      "https://github.com/Sameer-0077/Projects--0001/tree/main/P4_Tic_Tac_Toe",
  },
  // {
  //   title: "Socially",
  //   description: "A simple website showcasing Flexbox and positioning skills.",
  //   features: ["Responsive layout", "Navigation bar", "User-friendly design"],
  //   techStack: ["HTML", "CSS"],
  //   webLink: "https://socially.example.com",
  //   gitRepo:
  //     "https://github.com/Sameer-0077/Projects--0001/tree/main/P2_Socially",
  // },
  // {
  //   title: "PlayMusic",
  //   description: "A music player web app with basic JavaScript event handling.",
  //   features: [
  //     "Play and pause songs",
  //     "Basic UI interactions",
  //     "Event listeners for user actions",
  //   ],
  //   techStack: ["HTML", "CSS", "JavaScript"],
  //   webLink: "https://playmusic.example.com",
  //   gitRepo: "https://github.com/yourusername/playmusic",
  // },
];

const Projects = () => {
  return (
    <motion.div
      id="project"
      className="p-10 md:p-20 text-gray-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <ScrollReveal delay={0.3} direction="left">
        <motion.h1
          className="text-5xl font-extrabold text-center text-blue-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h1>
      </ScrollReveal>

      <ScrollReveal delay={0.2} direction="right">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className="bg-blue-400 p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl hover:bg-gradient-to-tr from-blue-500 to-blue-300 text-white transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="mt-2 text-gray-100">{project.description}</p>

              <h3 className="mt-4 font-semibold">Features:</h3>
              <ul className="list-disc ml-5 text-gray-100">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <h3 className="mt-4 font-semibold">Tech Stack:</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Live Demo & GitHub Repo Links */}
              <div className="mt-5 flex gap-4">
                <a
                  href={project.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-green-600 transition duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.gitRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-400 transition duration-300"
                >
                  GitHub Repo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>
    </motion.div>
  );
};

export default Projects;

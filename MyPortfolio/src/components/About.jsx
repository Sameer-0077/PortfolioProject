import React from "react";
import { motion } from "framer-motion";
import "devicon/devicon.min.css";
import { FaDatabase } from "react-icons/fa";

import ScrollReveal from "./ScrollReveal";

const About = () => {
  const skills = {
    Languages: [
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
    ],
    "Front-end": [
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    ],
    "Back-end & Database": [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express", icon: "devicon-express-original colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "REST APIs", icon: "" },
      { name: " Authentication ", icon: "" },
    ],
    "Other Tools & Tech": [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
    ],
  };
  return (
    <motion.div
      id="about"
      className="p-10 md:p-20 bg-gradient-to-r from-slate-800 via-slate-900 to-black text-gray-900"
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
          About Me
        </motion.h1>
      </ScrollReveal>

      {/* <motion.h1
        className="text-5xl font-extrabold text-center text-blue-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1> */}

      <ScrollReveal delay={0.5} direction="right">
        <motion.p
          className="mt-6 text-gray-200 text-lg text-center max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Hey! I'm <span className="font-bold text-blue-600">Sameer</span>, ➖a
          passionate full stack developer who loves turning ideas into clean,
          functional, and visually appealing web experiences. with a deep
          enthusiasm for learning and implementing a wide range of technologies.
          My expertise includes{" "}
          <span className="text-blue-700 font-semibold">
            HTML, CSS, JavaScript, React, Java
          </span>
          , and backend technologies like{" "}
          <span className="text-blue-700 font-semibold">
            Node.js, Express.js, and MongoDB
          </span>{" "}
          to bring projects to life that are both smart and user-friendly.
          <br />
          <br />
          For me, coding is more than just writing lines of code—it’s about{" "}
          <span className="font-medium">
            solving problems, experimenting with new ideas, and creating
            something people genuinely enjoy using
          </span>
          . Whether it’s a{" "}
          <span className="font-medium text-blue-700">personal project</span> or
          a{" "}
          <span className="font-medium text-blue-700">
            professional challenge
          </span>
          , I’m always eager to learn, improve, and deliver my best.
          <br />
          <br />
          I thrive on continuous learning and love exploring new technologies
          and methodologies. <br />{" "}
          <span className="font-medium text-green-700">
            Let's connect and discuss how we can create impactful solutions
            together!🤝
          </span>
        </motion.p>
      </ScrollReveal>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <ScrollReveal delay={0.3} direction="right">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
            Technical Skills
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.3} direction="left">
          <div className="grid md:grid-cols-2 gap-10">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-gray-900  rounded-2xl shadow-lg p-6 border border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-2xl text-orange-500 font-semibold mb-6 border-b border-gray-600 pb-2">
                  {category}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center group"
                    >
                      <i
                        className={`${skill.icon} text-5xl group-hover:scale-110 transition-transform duration-300`}
                      ></i>
                      <span className="mt-2 text-xl text-white group-hover:text-white">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </motion.div>
    </motion.div>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and user-friendly web applications.",
    },
    {
      title: "Frontend Development",
      description: "Creating visually appealing and interactive UI components.",
    },
    {
      title: "API Integration",
      description: "Integrating third-party APIs for dynamic data processing.",
    },
    {
      title: "JavaScript Solutions",
      description:
        "Solving problems using JavaScript, including DOM manipulation.",
    },
  ];

  return (
    <motion.div
      className="p-20 "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-5xl font-extrabold text-center text-blue-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Services
      </motion.h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-blue-400 p-6 rounded shadow-lg hover:shadow-xl transition-transform duration-300 hover:bg-gradient-to-tr from-blue-500 to-blue-200"
            whileHover={{ scale: 1.1 }}
          >
            <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Services;

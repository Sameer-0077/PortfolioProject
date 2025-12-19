import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

function Services() {
  const services = [
    {
      title: "Custom Website Development",
      description:
        "Building fully responsive, modern, and user-friendly websites tailored to your business needs using the latest web technologies.",
    },
    {
      title: "Backend Development",
      description:
        "Designing and implementing secure, scalable, and high-performance server-side applications and APIs to power your projects.",
    },
    {
      title: "Database Architecture & Management",
      description:
        "Structuring, optimizing, and managing databases to ensure data integrity, security, and efficient performance.",
    },
    {
      title: "Frontend Development",
      description:
        "Crafting visually appealing and highly interactive user interfaces with attention to detail and smooth user experience.",
    },
    {
      title: "REST API Development & Integration",
      description:
        "Creating and integrating RESTful APIs to enable seamless communication between applications and services.",
    },
    {
      title: "Responsive & Mobile-First Design",
      description:
        "Ensuring your website looks and works perfectly across all devices, from desktops to smartphones.",
    },
    {
      title: "Authentication & Security Solutions",
      description:
        "Implementing secure authentication systems and best practices to protect your applications from threats.",
    },
    {
      title: "Performance Optimization",
      description:
        "Improving website speed, load time, and efficiency to provide the best possible user experience.",
    },
    {
      title: "Deployment & Hosting Setup",
      description:
        "Setting up and deploying your application on reliable hosting platforms with proper configuration.",
    },
  ];

  return (
    <motion.div
      id="services"
      className="p-20 "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ScrollReveal delay={0.3} direction="left">
        <motion.h1
          className="text-5xl font-extrabold text-center text-blue-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Services
        </motion.h1>
      </ScrollReveal>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ScrollReveal delay={0.2} direction="right">
            <motion.div
              key={index}
              className="bg-gradient-to-r from-slate-800 via-slate-900 to-black p-6 rounded shadow-lg hover:shadow-xl transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <h2 className="text-2xl font-bold mb-3 text-orange-500">
                {service.title}
              </h2>
              <p className="text-gray-200">{service.description}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </motion.div>
  );
}

export default Services;

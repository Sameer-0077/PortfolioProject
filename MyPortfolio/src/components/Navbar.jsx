// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-blue-400 shadow-md py-4 px-8 flex justify-between items-center z-50">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        Sameer
      </h1>
      <ul className="flex space-x-6 text-gray-700 dark:text-white">
        <li>
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-blue-600 transition">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </li>
      </ul>
      <button className="text-white border bg-blue-500 px-4 py-2 hover:bg-blue-600 transition rounded-lg">
        Contact ↗
      </button>
    </nav>
  );
};

export default Navbar;

import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const sideMenuRef = useRef();
  const opneMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-blue-300 border-gray-200 px-2 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <h2 className="text-blue-950 font-bold text-4xl ">Sameer</h2>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="/contact"
              className="hidden lg:flex text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Contact ↗
            </Link>
            <button
              className="block md:hidden focus:outline-none"
              onClick={opneMenu}
            >
              <img src="/assets/menu-white.png" alt="" className="w-6 h-6" />
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `
                  ${isActive ? "text-orange-700" : "text-gray-950"}
                  block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 text-xl`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `
                  ${isActive ? "text-orange-700" : "text-gray-950"}
                  block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 text-xl`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `
                  ${isActive ? "text-orange-700" : "text-gray-950"}
                  block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 text-xl`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `
                  ${isActive ? "text-orange-700" : "text-gray-950"}
                  block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 text-xl`
                  }
                >
                  Services
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-blue-300 transition duration-500"
      >
        <div className="absolute right-6 top-6">
          <img
            src="/assets/close-white.png"
            alt=""
            className="w-6 cursor-pointer"
            onClick={closeMenu}
          />
        </div>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-blue-950 font-medium text-xl px-4 py-2.5 duration-200 border-b-2 border-transparent hover:border-blue-500 lg:border-0 lg:hover:bg-transparent lg:p-0 ${
                isActive ? "border-blue-500" : ""
              }`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-blue-950 font-medium text-xl px-4 py-2.5 duration-200 border-b-2 border-transparent hover:border-blue-500 lg:border-0 lg:hover:bg-transparent lg:p-0 ${
                isActive ? "border-blue-500" : ""
              }`
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-blue-950 font-medium text-xl px-4 py-2.5 duration-200 border-b-2 border-transparent hover:border-blue-500 lg:border-0 lg:hover:bg-transparent lg:p-0 ${
                isActive ? "border-blue-500" : ""
              }`
            }
            onClick={closeMenu}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-blue-950 font-medium text-xl px-4 py-2.5 duration-200 border-b-2 border-transparent hover:border-blue-500 lg:border-0 lg:hover:bg-transparent lg:p-0 ${
                isActive ? "border-blue-500" : ""
              }`
            }
            onClick={closeMenu}
          >
            Services
          </NavLink>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="block sm:hidden text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Contact ↗
          </Link>
        </li>
      </ul>
    </header>
  );
}

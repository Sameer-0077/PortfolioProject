import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const sideMenuRef = useRef();
  const opneMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = (elementId) => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
    scrollToPage(elementId);
  };
  const scrollToPage = (elementId) => {
    console.log(elementId);

    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky z-50 top-0">
      <nav className=" px-2 lg:px-6 py-2.5 bg-white/0 backdrop-blur-md border-b border-white/20">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <p className="flex items-center">
            <h2 className="text-blue-950 font-bold text-4xl ">
              <span className="text-orange-400">$</span>ă
              <span className="text-white">ɱ</span>
              £€
              <span className="text-green-400">₹</span>
            </h2>
          </p>
          <div className="flex items-center lg:order-2">
            <button
              className="hidden lg:flex text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              onClick={() => scrollToPage("contact")}
            >
              Contact ↗
            </button>
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
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 font-medium">
              <li
                className="hover:text-blue-600 cursor-pointer"
                onClick={() => scrollToPage("home")}
              >
                Home
              </li>
              <li
                className="hover:text-blue-600 cursor-pointer"
                onClick={() => scrollToPage("about")}
              >
                About
              </li>
              <li
                className="hover:text-blue-600 cursor-pointer"
                onClick={() => scrollToPage("project")}
              >
                Projects
              </li>
              <li
                className="hover:text-blue-600 cursor-pointer"
                onClick={() => scrollToPage("services")}
              >
                Services
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white/10 backdrop-blur-md transition duration-500"
      >
        <div className="absolute right-6 top-6">
          <img
            src="/assets/close-white.png"
            alt=""
            className="w-6 cursor-pointer"
            onClick={closeMenu}
          />
        </div>
        <li
          className="text-blue-950 font-medium text-lg px-4 py-2.5 duration-200 border-b-2 border-transparent hover:border-blue-500 lg:border-0 lg:hover:bg-transparent lg:p-0"
          onClick={() => closeMenu("home")}
        >
          Home
        </li>
        <li
          className="text-blue-950 font-medium text-lg px-4 py-2.5 duration-200 border-b-2 border-transparent hover:border-blue-500 lg:border-0 lg:hover:bg-transparent lg:p-0"
          onClick={() => closeMenu("about")}
        >
          About
        </li>
        <li
          className="text-blue-950 font-medium text-lg px-4 py-2.5 duration-200 border-b-2 border-transparent hover:border-blue-500 lg:border-0 lg:hover:bg-transparent lg:p-0"
          onClick={() => closeMenu("project")}
        >
          Project
        </li>
        <li
          className="text-blue-950 font-medium text-lg px-4 py-2.5 duration-200 border-b-2 border-transparent hover:border-blue-500 lg:border-0 lg:hover:bg-transparent lg:p-0"
          onClick={() => closeMenu("services")}
        >
          Services
        </li>
        <li
          className="block sm:hidden text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-xl px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          onClick={() => closeMenu("contact")}
        >
          Contact ↗
        </li>
      </ul>
    </header>
  );
}

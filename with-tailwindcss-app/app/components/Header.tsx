"use client"; // This is a client component
import React, { useState } from "react";

const Header: React.FC = () => {
  const [hidden, setHidden] = useState(true);
  const handleClick = (previous: boolean) => {
    setHidden(!previous);
  };
  return (
    <header className="bg-black">
      <div className="container mx-auto flex">
        <div className="w-2/3 text-center border-4 border-red-700">
          {/* Middle segment (2/4) */}
          <h1 className="text-5xl font-bold text-white">Rishna Rajasekaram</h1>
          <p className="text-xl text-yellow-700">Frontend Developer</p>
        </div>
        <button onClick={() => handleClick(hidden)}>
          <svg
            xmlns="<http://www.w3.org/2000/svg>"
            viewBox="0 0 20 16"
            fill="currentColor"
            className="h-20 w-20 mx-2 xl:hidden bg-red-700 hover:bg-sky-500"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>{" "}
        <div
          className={`menu-options text-yellow-700 xl:hidden ${
            hidden ? "hidden " : ""
          }`}
        >
          <ul
            id="nav-menu"
            className="space-y-2 items-center px-4 flex flex-col  font-semibold text-xl mt-4"
          >
            <a href="#Skills">Skills</a>
            <a href="#ProjectWork">Projects</a>
            <a href="#Contact">Contact</a>
          </ul>
        </div>
        <div className="hidden w-1/3 xl:flex justify-center items-center border-2 border-yellow-700 bg-black">
          {/* Third segment (1/4) */}
          <a
            className="mx-4 border-2 p-2  border-red-700 text-white hover:underline  hover:text-red-700"
            href="#1"
          >
            About
          </a>{" "}
          <a
            className="mx-4 border-2 p-2  border-red-700 text-white hover:underline  hover:text-red-700"
            href="#2"
          >
            Skills
          </a>
          /
          <a
            className="mx-4 border-2 p-2  border-red-700 text-white hover:underline  hover:text-red-700 "
            href="#3"
          >
            Projects
          </a>{" "}
          /
          <a
            className="mx-4 border-2 p-2  border-red-700 text-white hover:underline  hover:text-red-700"
            href="#4"
          >
            Contact
          </a>
          {/* Get help with getting the links to go where u want, i.e. halfway down the page. */}
        </div>
      </div>
    </header>
  );
};

export default Header;

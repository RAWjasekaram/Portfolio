import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-black">
      <div className="container mx-auto flex">
        <div className="w-1/4 bg-gray-800">{/* First segment (1/4) */}</div>
        <div className="w-2/4 text-center border-4 border-red-700">
          {/* Middle segment (2/4) */}
          <h1 className="text-3xl font-bold text-white">Rishna Rajasekaram</h1>
          <p className="text-xl text-yellow-700">Frontend Developer</p>
        </div>
        <div className="w-1/4 flex justify-end items-center bg-gray-800">
          {/* Third segment (1/4) */}
          <a className="mx-4 border-2 p-2 text-white hover:underline  hover:text-red-700">
            About
          </a>{" "}
          /
          <a className="mx-4 border-2 p-2 text-white hover:underline  hover:text-red-700">
            Projects
          </a>{" "}
          /
          <a className="mx-4 border-2 p-2 text-white hover:underline  hover:text-red-700">
            Contact
          </a>
          {/* Get help with getting the links to go where u want, i.e. halfway down the page. */}
        </div>
      </div>
    </header>
  );
};

export default Header;

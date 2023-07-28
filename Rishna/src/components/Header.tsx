import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">Your Name</h1>
        <p className="text-xl">Frontend Developer</p>
      </div>
    </header>
  );
};

export default Header;

import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-red-800 text-yellow-900 p-4">
      <div className="container mx-auto flex">
        <div className="w-1/4">{/* First segment (1/4) */}</div>
        <div className="w-2/4 text-center">
          {/* Middle segment (2/4) */}
          <h1 className="t-3xl font-bold text-blue-500">Rishna Rajasekaram</h1>
          <p className="text-xl">Frontend Developer</p>
        </div>
        <div className="w-1/4">{/* Third segment (1/4) */}</div>
      </div>
    </header>
  );
};

export default Header;

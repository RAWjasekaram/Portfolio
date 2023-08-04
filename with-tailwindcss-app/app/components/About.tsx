import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto bg-gray-800">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p>
          Hello I'm Rishna, a frontend engineer at Skillify a Toronto-based
          startup that offers digital media literacy coaching.
        </p>
        {/* Add more information and styling here */}
      </div>
    </section>
  );
};

export default About;

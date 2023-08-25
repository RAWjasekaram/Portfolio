import React from "react";

const Skills: React.FC = () => {
  return (
    <div className="container mx-auto  justify-center">
      {" "}
      <h2
        className="text-3xl font-bold underline text-yellow-700 flex justify-center"
        id="2"
      >
        Skills
      </h2>
      <br />
      <div className="flex justify-center bg-white">
        <div className="flex space-x-16">
          <img
            src="https://brandeps.com/logo-download/H/HTML-5-logo-vector-01.svg"
            className="w-24 h-32  mx-auto md:mx-0 mb-4 md:mb-0"
          />
          <img
            src="https://brandeps.com/logo-download/C/CSS-3-logo-vector-01.svg"
            className="w-24 h-32  mx-auto md:mx-0 mb-4 md:mb-0"
          />
          <img
            src="https://brandeps.com/logo-download/T/Typescript-logo-vector-02.svg"
            className="w-24 h-32  mx-auto md:mx-0 mb-4 md:mb-0"
          />
          <img
            src="https://brandeps.com/logo-download/J/JavaScript-logo-vector-01.svg"
            className="w-24 h-32  mx-auto md:mx-0 mb-4 md:mb-0"
          />

          <img
            src="https://brandeps.com/icon-download/G/Github-icon-vector-22.svg"
            className="w-24 h-32  mx-auto md:mx-0 mb-4 md:mb-0"
          />
          <img
            src="https://brandeps.com/icon-download/N/Nextjs-icon-vector-01.svg"
            className="w-24 h-32  mx-auto md:mx-0 mb-4 md:mb-0"
          />
          <img
            src="https://brandeps.com/logo-download/R/React-logo-vector-01.svg"
            className="w-24 h-32  mx-auto md:mx-0 mb-4 md:mb-0"
          />
        </div>
      </div>
      <br />
      <br />
      <br />{" "}
    </div>
  );

  // add column grid for the pics of the skills you can use + add margins + padding //
};

export default Skills;

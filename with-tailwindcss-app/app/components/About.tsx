import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-10">
      <div className="container  text-white mx-auto bg-gray-800">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p>
          Hello I'm Rishna, a frontend engineer at Skillify a Toronto-based
          startup that offers digital media literacy coaching. I am currently
          learning how to become a front-end engineer and looking to grow my
          skills throught practical practise and this is my first React
          Portfolio page, I am hoping to start my own business in which I can
          provide these and in time many more other products and services. Hope
          you enjoy and feel free to get into contact with me if you have any
          questions or would like to work with me!
        </p>

        {/* Add more information and styling here */}
      </div>
    </section>
  );
};

export default About;

import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-10">
      <div className="container grid grid-cols-3 gap-6 text-white mx-auto bg-gray-800">
        <div className="col-span-3">
          <h2 className="text-2xl font-bold">About Me</h2>
        </div>
        <div className="col-span-3 md:col-span-2">
          <p>
            Hello I'm Rishna, a frontend engineer at Skillify a Toronto-based
            startup that offers digital media literacy coaching. I am currently
            learning how to become a front-end engineer and looking to grow my
            skills through practical practice, and this is my first React
            Portfolio page. I am hoping to start my own business in which I can
            provide these and in time many more other products and services.
            Hope you enjoy and feel free to get into contact with me if you have
            any questions or would like to work with me!
          </p>
          <img src="https://images.nightcafe.studio/jobs/6AcI5A8qnh2HVQf4ITc4/6AcI5A8qnh2HVQf4ITc4--1--x5ggz.jpg?tr=w-1600,c-at_max"></img>
        </div>
        {/* You can add more grid items here */}
      </div>
    </section>
  );
};

export default About;

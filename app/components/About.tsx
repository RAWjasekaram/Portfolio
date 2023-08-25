import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-10">
      <div
        id="1"
        className="container grid grid-cols-3 gap-6 text-white mx-auto bg-gray-800"
      >
        <div className="col-span-3 md:col-span-2 md:pr-6">
          <h2 className="text-3xl font-bold underline text-yellow-700">
            About Me
          </h2>
          <p className="my-4 leading-relaxed md:leading-loose text-xl">
            Hello my name is Rishna, a frontend engineer at Skillify a
            Toronto-based startup that offers digital media literacy coaching. I
            am currently learning how to become a front-end engineer and looking
            to grow my skills through practical practice, and this is my first
            React Portfolio page. I am hoping to start my own business in which
            I can provide these and in time many more other products and
            services. Below you will find some of the projects I have already
            completed and a way to get in touch with me. I hope you enjoy my
            work and feel free to get into contact with me if you have any
            questions or would like to work with me!
          </p>
        </div>
        <div className="col-span-3 md:col-span-1">
          <img
            src="https://i.imgur.com/AMHiUSN.jpeg"
            className="rounded-full mx-auto md:mx-0 mb-4 md:mb-0"
            alt="Profile"
          />
        </div>
        {/* You can add more grid items here */}
      </div>
    </section>
  );
};

export default About;

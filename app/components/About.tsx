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
            Hello, my name is Rishna. I work as a frontend engineer at Skillify,
            a Toronto-based startup that specializes in offering digital media
            literacy coaching. Currently, I am in the process of mastering the
            skills required for a front-end engineer role and am actively
            seeking opportunities to enhance my abilities through hands-on
            experience. This portfolio showcases my inaugural React projects and
            serves as a testament to my growth.
            <br />
            My aspiration is to establish an independent venture focused on
            providing not only these services but also an array of complementary
            products. Within this portfolio, you'll find a collection of
            projects I've successfully undertaken. Please don't hesitate to
            reach out if you're interested in collaborating or have any
            inquiries; I'm open to connecting and discussing ideas. Thank you
            for taking the time to explore my work.
            <br />
            Your feedback and potential collaboration are greatly appreciated.
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

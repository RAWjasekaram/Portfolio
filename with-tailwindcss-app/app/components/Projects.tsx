import React from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    title: "Rock-Paper-Scissors-Lizard-Spock",
    description:
      "Created a rock paper scissors game with a couple additional elements, all of which are explained on the page. The game is single player against a computer and a single click generates a CPU response and the result of who won.",
    technologies: ["Javascript", "HTML", "Tailwind CSS"],
    imageUrl: "/project1.png",
    demoUrl: "https://rock-paper-scissors-dusky-pi.vercel.app/",
  },

  {
    title: "Rock-Paper-Scissors-Lizard-Spock",
    description:
      "Created a rock paper scissors game with a couple additional elements, all of which are explained on the page. The game is single player against a computer and a single click generates a CPU response and the result of who won.",
    technologies: ["Javascript", "HTML", "Tailwind CSS"],
    imageUrl: "/project1.png",
    demoUrl: "https://rock-paper-scissors-dusky-pi.vercel.app/",
  },
  // Add more projects here
];

const Projects: React.FC = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold underline text-yellow-700">
          Projects
        </h2>
        <br />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-4 shadow-md">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
              <p className="mt-2">
                Technologies used: {project.technologies.join(", ")}
              </p>
              {/* Use next/image instead of img */}
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-blue-500"
              >
                View Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

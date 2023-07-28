import React from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/project1.png",
    demoUrl: "https://project1demo.com",
  },
  // Add more projects here
];

const Projects: React.FC = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-4 shadow-md">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
              <p className="mt-2">
                Technologies used: {project.technologies.join(", ")}
              </p>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full mt-4"
              />
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

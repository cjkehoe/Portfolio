// Project.js
import React from "react";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons

function Project({ project }) {
  return (
    <section className="h-screen text-white flex flex-col items-center justify-between text-4xl pt-20 pb-10 px-5 space-y-5">
      <div className="text-center">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        {/* Add more project details here */}
      </div>
      <a className="py-2 text-xl hover:text-blue-700" href={project.github} target="_blank" rel="noopener noreferrer">
        <FaGithub size={32} /> {/* Display GitHub icon */}
      </a>
    </section>
  );
}

export default Project;

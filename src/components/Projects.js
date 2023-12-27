import React from "react";
import { PORJECT_DATA } from "../utils/mockData";

const Projects = () => {
  return (
    <div className="text-white self-start p-5">
      <h2 className="text-center text-4xl font-bold bg-green-500 p-2 m-2 ">
        Projects
      </h2>
      <div className="grid grid-cols-2 gap-10 m-10 ">
        {PORJECT_DATA.map((project) => {
          return <ProjectCard key={project.projectName} project={project} />;
        })}
      </div>
    </div>
  );
};

const ProjectCard = (props) => {
  const { projectName, projectImageURL, liveDemoUrl, githubUrl, description } =
    props.project;
  return (
    <div className="">
      <div>
        <p className="font-semibold text-xl p-2 m-2">{projectName}</p>
        <img className="w-96" src={projectImageURL} alt="project thumbnail" />
      </div>
      <div className="text-lg font-bold flex justify-around p-2 bg-green-500">
        <span className="border border-black p-2 rounded-sm hover:opacity-50 hover:cursor-pointer">
          Demo
        </span>
        <span className="border border-black p-2 rounded-sm hover:opacity-50 hover:cursor-pointer">
          Code
        </span>
      </div>
    </div>
  );
};

export default Projects;

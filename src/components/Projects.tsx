import ProjectCard from "./ProjectCard";
import UIProject from "./UIProject";

const Projects = () => {
  return (
    <section id="projects" className="py-10">
      <h2>Projects</h2>
      <div className="mt-4 flex flex-col">
        {/* project card */}
        <ProjectCard />
        <UIProject />
      </div>
    </section>
  );
};

export default Projects;

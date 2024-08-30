import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-10">
      <h2>Projects</h2>
      <div className="mt-4 flex flex-col">
        {/* project card */}
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;

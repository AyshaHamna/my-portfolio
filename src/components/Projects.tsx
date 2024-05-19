import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-10">
      <h2>Projects</h2>
      <div className="mt-4 flex  justify-between gap-y-8">
        {/* project card */}
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;

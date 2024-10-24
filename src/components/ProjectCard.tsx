import { Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    name: "E-commerce App",
    techStack: "Reactjs, Tailwindcss, Nodejs, Clerk, Mongodb",
    description:
      "Full-stack E-commerce app handling product display, shopping cart management and order placement.",
    image: "ecommerce-app.png",
    githubRepo: "https://github.com/AyshaHamna/ecommerce-frontend",
    link: "https://digix-ecommerce-frontend.vercel.app/",
  },
  {
    name: "HirelyAi",
    techStack: "Reactjs, Nodejs, openAi, Mongodb, Clerk",
    description:
      "Job Portal powered by AI, with applicant rating system based on responses.",
    image: "hirelyai-app.png",
    githubRepo: "https://github.com/AyshaHamna/ai-job-frontend",
    link: "https://ai-job-frontend.vercel.app/",
  },
  {
    name: "AI Chat with PDF",
    techStack: "Nextjs, Reactjs, Clerk, Pinecone",
    description:
      "An ongoing project that integrates PDF interaction capabilities within a chat interface, allowing users to seamlessly chat and manage PDFs.",
    image: "chat-wtih-pdf-ui.png",
    githubRepo: "https://github.com/AyshaHamna/chat-with-pdf-challenge",
    link: "https://chat-with-pdf-challenge-hamna.vercel.app/",
  },
  {
    name: "Travel Agent UI",
    techStack: "Figma, Nextjs, Clerk, Mongodb",
    description:
      "Sleek and modern interface for a travel agency, showcasing destinations in Sri Lanka.",
    image: "travel-agency-ui.png",
    githubRepo: "https://github.com/AyshaHamna/travel-app",
    link: "https://travel-app-srilanka.vercel.app/",
  },
];

const ProjectCard = () => {
  return (
    <div className="flex flex-col gap-5 my-5">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col gap-3 w-full my-3 border p-5 rounded-2xl shadow-lg shadow-zinc-900 hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
        >
          <div className="w-full ">
            <img
              src={project.image}
              alt={project.name}
              className="rounded-xl w-full h-80 object-cover object-top"
            />
          </div>

          <div className="flex justify-between flex-col gap-y-3 md:flex-row">
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold"> {project.name}</h1>
              <h3 className="text-sm text-muted-foreground">
                {project.techStack}
              </h3>
            </div>

            <div className="flex gap-3">
              <a href={project.githubRepo}>
                <Button className="rounded" variant="secondary">
                  <Github className="w-5 h-5" />
                  Code
                </Button>
              </a>
              <a href={project.link}>
                <Button className="rounded" variant="outline">
                  Live Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;

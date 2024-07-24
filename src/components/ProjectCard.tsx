import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Github } from "lucide-react";

const projects = [
  {
    name: "HirelyAi",
    techStack: "Reactjs, Nodejs, openAi, Mongodb",
    description:
      "Job Portal powered by AI, with applicant rating system based on responses.",
    githubRepo: "https://github.com/AyshaHamna/ai-job-frontend",
    link: "https://aidf-front-end-hamna.netlify.app/",
  },
  {
    name: "AI Chat with PDF",
    techStack: "Nextjs, Reactjs, Clerk",
    description:
      "An ongoing project that integrates PDF interaction capabilities within a chat interface, allowing users to seamlessly chat and manage PDFs.",
    githubRepo: "https://github.com/AyshaHamna/chat-with-pdf-challenge",
    link: "https://chat-with-pdf-challenge-hamna.vercel.app/",
  },
];

const ProjectCard = () => {
  return (
    <div className="m-5 flex flex-col gap-5">
      {projects.map((project) => (
        <Card className="rounded-xl" key={project.name}>
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>{project.techStack}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{project.description}</p>
          </CardContent>
          <CardFooter className="flex gap-4">
            <a href={project.githubRepo}>
              <Button className="rounded" variant="secondary">
                <Github />
                Code
              </Button>
            </a>
            <a href={project.link}>
              <Button className="rounded" variant="outline">
                Live Demo
              </Button>
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProjectCard;

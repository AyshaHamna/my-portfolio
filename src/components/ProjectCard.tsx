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

const ProjectCard = () => {
  return (
    <div className="m-5">
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>HirelyAi</CardTitle>
          <CardDescription>Reactjs, Nodejs, openAi, Mongodb</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Job Portal powered by AI, with applicant rating system based on
            responses.
          </p>
        </CardContent>
        <CardFooter className="flex gap-4">
          <a href="https://github.com/AyshaHamna/ai-job-frontend">
            <Button className="rounded" variant="secondary">
              <Github />
              Code
            </Button>
          </a>
          <a href="https://aidf-front-end-hamna.netlify.app/">
            <Button className="rounded" variant="outline">
              Live Demo
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;

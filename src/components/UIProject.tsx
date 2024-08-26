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

const uiProject = 
  {
    name: "Travel Agent UI",
    techStack: "Figma",
    githubRepo: "https://github.com/AyshaHamna/travel-app",
    link: "https://travel-app-srilanka.vercel.app/",
  };

export default function UIProject() {
  return (
    <div className="m-5">
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>{uiProject.name}</CardTitle>
          <CardDescription>{uiProject.techStack}</CardDescription>
        </CardHeader>
        <CardContent className="max-h-72 overflow-auto">
          <img
            src="/travel-agency-ui.png"
            alt="travel agency Web UI"
            className=""
          />
        </CardContent>
        <CardFooter className="flex gap-4">
          <a href={uiProject.githubRepo}>
            <Button className="rounded" variant="secondary">
              <Github />
              Code
            </Button>
          </a>
          <a href={uiProject.link}>
            <Button className="rounded" variant="outline">
              Live Demo
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}

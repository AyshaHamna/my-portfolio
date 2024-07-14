import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function UIProject() {
  return (
    <div className="m-5">
      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Travel Agent UI</CardTitle>
          <CardDescription>Figma</CardDescription>
        </CardHeader>
        <CardContent className="max-h-72 overflow-auto">
          <img
            src="/travel-agency-ui.png"
            alt="travel agency Web UI"
            className=""
          />
        </CardContent>
        <CardFooter className="flex gap-4"></CardFooter>
      </Card>
    </div>
  );
}

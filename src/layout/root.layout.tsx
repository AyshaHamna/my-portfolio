import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { Separator } from "@/components/ui/separator";

function RootLayout() {
  return (
    <main className="flex flex-col py-8 ">
      <div className="container max-w-screen-sm">
        <Navbar />
        <AboutMe/>
        <Separator/>
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

export default RootLayout;

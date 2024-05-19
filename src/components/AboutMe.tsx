import Techstack from "./Techstack";
import {ReactTyped} from "react-typed";

const AboutMe = () => {
  return (
    <div className="py-20">
      <h1><ReactTyped strings={["Hey, I'm Hamna"]} typeSpeed={100}/></h1>
      <p>
        Front-end developer. Eager to contribute my technical expertise and
        collaborate on innovative projects in a dynamic environment.
      </p>
      <div className="pt-8">
        {/* technologies i use */}
        <Techstack />
      </div>
    </div>
  );
};

export default AboutMe;

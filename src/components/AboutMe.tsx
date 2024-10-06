import Techstack from "./Techstack";
import { ReactTyped } from "react-typed";

const AboutMe = () => {
  return (
    <div className="py-10">
      <h1>
        <ReactTyped strings={["Hey, I'm Hamna"]} typeSpeed={100} />
      </h1>
      <p className="sm:text-base text-sm">
        I’m a front-end developer specializing in building responsive,
        high-performance web applications. With over 2 years of experience, I’ve
        improved page load times by 30% using optimization techniques like lazy
        loading and code splitting. <br />
        <br />I collaborate with cross-functional teams to enhance UI/UX,
        leading to a 10% boost in user engagement. I focus on developing fast,
        scalable, and accessible applications that meet both client and business
        needs.
      </p>
      <div className="pt-8">
        {/* technologies i use */}
        <Techstack />
      </div>
    </div>
  );
};

export default AboutMe;

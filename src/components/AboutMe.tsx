import Techstack from "./Techstack";

const AboutMe = () => {
  return (
    <div className="py-20">
      <h1>Hey, I'm Hamna</h1>
      <p>
        I'm a software developer. Eager to contribute technical expertise and
        collaborate on innovative projects in a dynamic environment.
      </p>
      <div className="pt-10">
        {/* technologies i use */}
        <Techstack />
      </div>
    </div>
  );
};

export default AboutMe;

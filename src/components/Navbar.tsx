import { Github, Linkedin } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between py-5">
      {/* github and linkedin logo */}
      <div className="flex gap-x-3 items-center">
        <a href="https://www.linkedin.com/in/aysha-hamna-51126b1aa/">
          <Linkedin />
        </a>
        <a href="https://github.com/AyshaHamna">
          <Github />
        </a>
      </div>
      {/* projects and contact me links */}
      <div className="flex gap-x-8 items-center">
        <a href="#projects">Projects</a>
        <a href="#contact">Let's Connect</a>
      </div>
    </div>
  );
};

export default Navbar;

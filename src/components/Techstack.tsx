interface TechStackItemProps {
  name: string;
  src: string;
}

const TechStackHover: React.FC<{ name: string }> = ({ name }) => {
  return (
    <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-sm px-2 py-2 rounded transition-opacity duration-300">
      {name}
    </span>
  );
};

const TechStackItem: React.FC<TechStackItemProps> = ({ name, src }) => (
  <div className="relative group">
    <img src={src} alt={name} className="h-10 md:h-14" />
    <TechStackHover name={name} />
  </div>
);

const Techstack = () => {
  const techStacks = [
    { name: "Next.js", src: "/nextjs-icon.svg" },
    { name: "React.js", src: "/reactjs-icon.svg" },
    { name: "TypeScript", src: "/typescript-icon.svg" },
    { name: "TailwindCSS", src: "/tailwindcss-icon.svg" },
    { name: "Node.js", src: "/nodejs-icon.svg" },
    { name: "MongoDB", src: "/mongodb-icon.svg" },
  ];

  return (
    <section>
      <h2>Tech Stack</h2>
      <div className="flex items-center gap-x-5 md:gap-x-10 pt-5 flex-wrap gap-y-5">
        {techStacks.map((stack) => (
          <TechStackItem key={stack.src} name={stack.name} src={stack.src} />
        ))}
      </div>
      {/* <div>
        <img src="/nextjs-icon.svg" alt="nextjs icon" />
      </div> */}
    </section>
  );
};

export default Techstack;

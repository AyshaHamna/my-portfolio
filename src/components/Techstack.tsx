import StackIcon from "tech-stack-icons";

interface TechStackItemProps {
  name: string; // The technology name (for the hover label)
  iconName: string; // The actual name used in `StackIcon` for the icon
}

const TechStackHover: React.FC<{ name: string }> = ({ name }) => {
  return (
    <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-sm px-2 py-2 rounded transition-opacity duration-300">
      {name}
    </span>
  );
};

const TechStackItem: React.FC<TechStackItemProps> = ({ name, iconName }) => (
  <div className="relative group">
    <StackIcon name={iconName} className="icon" />
    <TechStackHover name={name} />
  </div>
);

const Techstack = () => {
  const techStacks = [
    { name: "Next.js", iconName: "nextjs" },
    { name: "React.js", iconName: "reactjs" },
    { name: "TypeScript", iconName: "typescript" },
    { name: "TailwindCSS", iconName: "tailwindcss" },
    { name: "Node.js", iconName: "nodejs" },
    { name: "MongoDB", iconName: "mongodb" },
  ];

  return (
    <section>
      <h2>Tech Stack</h2>
      <div className="flex items-center gap-x-5 md:gap-x-10 pt-5 flex-wrap gap-y-5">
        {techStacks.map((stack) => (
          <TechStackItem
            key={stack.iconName}
            name={stack.name}
            iconName={stack.iconName}
          />
        ))}
      </div>
    </section>
  );
};

export default Techstack;

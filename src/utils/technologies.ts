import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiDotnet, SiSharp, SiTypescript, SiNestjs, SiTailwindcss, SiPostgresql } from "react-icons/si";

type Technology = {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
};


export const technologies: Technology[] = [
  { icon: FaReact, name: "React" },
  { icon: FaNodeJs , name: "Node.js" },
  { icon: SiDotnet , name: ".NET" },
  { icon: SiSharp , name: "C#" },
  { icon: SiTypescript , name: "TypeScript" },
  { icon: SiDotnet , name: "ASP.NET" },
  { icon: SiNestjs , name: "Nest.js" },
  { icon: SiTailwindcss , name: "TailwindCSS" },
  { icon: FaBootstrap , name: "Bootstrap" },
  { icon: SiPostgresql , name: "PostgreSQL" }
];

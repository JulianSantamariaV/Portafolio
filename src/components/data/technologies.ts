import {
    SiSharp,
    SiTypescript,
    SiJavascript,
    SiPostgresql,
    SiAmazonrds,
    SiReact,
    SiRedux,
    SiAngular,
    SiNestjs,
    SiDotnet,
    SiTailwindcss,
    SiHtml5,
    SiCss3,
    SiAmazons3,
    SiLinux,
  } from "react-icons/si";  
  import { FaDatabase, FaWindows } from "react-icons/fa";
  import { ITechnologies } from "@/utils/ITechnologies";
  
  export const technologies : ITechnologies[] = [
    { name: "C#", icon: SiSharp, type: "Backend" },
    { name: "TypeScript", icon: SiTypescript, type: "Frontend" },
    { name: "JavaScript", icon: SiJavascript, type: "Frontend" },
    { name: "PostgreSQL", icon: SiPostgresql, type: "Backend" },
    { name: "SQL Server", icon: FaDatabase, type: "Backend" },         
    { name: "Amazon RDS", icon: SiAmazonrds, type: "Backend" },
    { name: "React", icon: SiReact, type: "Frontend" },
    { name: "Redux Toolkit", icon: SiRedux, type: "Frontend" },
    { name: "Angular", icon: SiAngular, type: "Frontend" },
    { name: "NestJS", icon: SiNestjs, type: "Backend" },
    { name: "ASP.NET Core MVC", icon: SiDotnet, type: "Backend" },
    { name: "Tailwind CSS", icon: SiTailwindcss, type: "Frontend" },
    { name: "HTML5", icon: SiHtml5, type: "Frontend" },
    { name: "CSS3", icon: SiCss3, type: "Frontend" },
    { name: "Amazon S3", icon: SiAmazons3, type: "Backend" },
    { name: "Windows", icon: FaWindows , type: "Backend" },            
    { name: "Linux", icon: SiLinux, type: "Backend" },
  ];
  
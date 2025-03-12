
import "./onePagePortfolio.css";
import NavBar from "./components/NavBar";
import { useScrollNavigation } from "./hooks/useScrollNavigation";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { Toaster } from "sonner";
import { InputForm } from "./components/Form";


import { technologies } from "./utils/technologies";

export default function OnePagePortfolio() {

  const name: string = "Julian";

  const sectionIds = ["home", "about", "projects", "contact"];

  const { handleScroll } = useScrollNavigation(sectionIds, 700);

  return (
    <div className="min-h-screen bg-gray-950 text-zinc-200" onWheelCapture={handleScroll}>
      <Toaster position="top-right" richColors />
      {/* <DistortedBackground></DistortedBackground> */}
      <NavBar />

      {/* SECCIONES */}
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800"
      >
        <h1 className="text-4xl font-semibold light">Hi, i'm {name}.</h1>

        <div className="absolute bottom-4 right-4 flex flex-col justify-center items-center">
          <ArrowDownIcon className="w-8 h-8 text-zinc-200" />
        </div>
      </section>

      <section
        id="about"
        className="h-screen flex items-center justify-center bg-gradient-to-r text-zinc-900 from-gray-300 to-zinc-500 gap-10"
      >
        <div className="w-3/5 justify-start align-middle text-wrap">
          <h2 className="text-4xl font-semibold light">Full-stack software developer</h2>
        </div>

        <div>
          <ul className="text-bold list-none m-5 border-red-300 border-1 p-3 space-y-3">
            {technologies.map((tech, index) => (
              <li key={index} className="">
                <tech.icon className="w-10 h-10"></tech.icon>
              </li>
            ))}
          </ul>          
        </div>

      </section>

      <section
        id="projects"
        className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500"
      >
        <h2 className="text-4xl font-semibold">Proyectos</h2>
      </section>

      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-800"
      >
        <h2 className="text-4xl font-semibold">Contacto</h2>
        <InputForm></InputForm>
      </section>
    </div>
  );
}


import "./onePagePortfolio.css";
import NavBar from "./components/NavBar";
import { useScrollNavigation } from "./hooks/useScrollNavigation";
import { ArrowDownCircleIcon, ArrowDownIcon, ArrowDownLeftIcon, ArrowTurnLeftDownIcon } from "@heroicons/react/24/outline";
import { ArrowDownTrayIcon, ArrowTrendingDownIcon, BarsArrowDownIcon } from "@heroicons/react/16/solid";


export default function OnePagePortfolio() {
  const name: string = "Julian";

  const sectionIds = ["home", "about", "projects", "contact"];

  const { handleScroll } = useScrollNavigation(sectionIds, 700);

  return (
    <div className="min-h-screen bg-gray-950 text-zinc-200" onWheelCapture={handleScroll}>
      {/* <DistortedBackground></DistortedBackground> */}
      <NavBar />

      {/* SECCIONES */}
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800"
      >
        <h1 className="text-4xl font-semibold home light">Hi, i'm {name}.</h1>

        <div className="absolute bottom-4 right-4 flex flex-col justify-center items-center">
    <ArrowDownIcon className="w-8 h-8 text-zinc-200" />
  </div>
      </section>


      <section
        id="about"
        className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-300 to-zinc-500"
      >
        <h2 className="text-4xl font-semibold">Sobre mí</h2>
      </section>

      <section
        id="projects"
        className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500"
      >
        <h2 className="text-4xl font-semibold">Proyectos</h2>
      </section>

      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-gradient-to-r from-red-700 to-red-500"
      >
        <h2 className="text-4xl font-semibold">Contacto</h2>
      </section>
    </div>
  );
}

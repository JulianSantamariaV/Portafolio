import "./onePagePortfolio.css";

import { useScrollNavigation } from "./hooks/useScrollNavigation";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { Toaster } from "sonner";
import { InputForm } from "./components/Form";
import { CarouselMain } from "./components/CarouselMain";
import { technologies } from "./components/data/technologies";

export default function OnePagePortfolio() {

  const name: string = "Julian";
  const role: string = "Full Stack Developer";

  const sectionIds = ["home", "about", "projects", "contact"];

  const { handleScroll } = useScrollNavigation(sectionIds, 700);



  return (
    <div className="min-h-screen bg-gray-950 text-zinc-200 overflow-hidden" onWheelCapture={handleScroll}>
           
      <div className="fixed w-full h-full opacity-30 pointer-events-none bg-grid-pattern"></div>
      {/* SECCIONES */}
      <section
        id="home"
        className="min-h-screen relative flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
      >
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-semibold home light">
            Hi, I'm {name}
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 tracking-wide">
            {role}
          </p>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto px-4">
            Crafting digital experiences with modern web technologies
          </p>
        </div>

        <div className="absolute bottom-8 right-1/2 transform translate-x-1/2">
          <ArrowDownIcon className="w-8 h-8 text-zinc-400 animate-bounce interactive" />
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
      >
        <div className="about-section ">
          <div>
            <h2 className="text-4xl font-semibold text-zinc-200 mb-8 text-center">About Me</h2>
            <p className="text-zinc-400 leading-relaxed">
              Content about you...
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-zinc-300 mb-4">Frontend</h3>
              <CarouselMain dataProp={technologies} type="Frontend" direction="ltr" className="interactive" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-zinc-300 mb-4">Backend</h3>
              <CarouselMain dataProp={technologies} type="Backend" direction="rtl" className="interactive" />
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-semibold text-zinc-200 mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add your project cards here */}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
      >
        <div className="max-w-xl mx-auto px-4 py-12">
          <h2 className="text-4xl font-semibold text-zinc-200 mb-8">Contact</h2>
          <div className="glass-container p-8">
            <InputForm />
          </div>
        </div>
      </section>
      <Toaster position="top-right" richColors /> 
    </div>
  );
}

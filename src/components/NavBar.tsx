import { sections } from "../utils/sections";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full p-4 mx-auto flex justify-around">
      {sections.map(({id, icon: Icon}) => (
        <button key={id}
          onClick={() => scrollToSection(id)}
          className="p-2  cursor-pointer hover:scale-120 ease-in-out duration-300">
            <Icon className='w-8 h-8 text-zinc-300'/>          
        </button>
      ))}
    </nav>
  );
};

export default NavBar;

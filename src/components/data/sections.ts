import { ISections } from "@/utils/ISections";
import { HomeIcon, UserIcon, FolderIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export const sections : ISections[] = [
  { id: "home", name: "Inicio", icon: HomeIcon },
  { id: "about", name: "Sobre mí", icon: UserIcon },
  { id: "projects", name: "Proyectos", icon: FolderIcon },
  { id: "contact", name: "Contacto", icon: EnvelopeIcon },
];

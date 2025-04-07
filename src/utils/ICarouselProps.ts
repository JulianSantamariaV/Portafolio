import { ITechnologies } from "./ITechnologies";

export interface CarouselProps {
    dataProp: ITechnologies[];
    type: ITechnologies["type"];
    direction: "ltr" | "rtl";
    className?: string;
  }
  
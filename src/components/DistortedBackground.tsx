import { useState } from "react";

const DistortedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: -50, y: -50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="relative w-full h-screen bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Efecto de distorsión */}
      <div
        className="absolute w-[200px] h-[200px] rounded-full backdrop-blur-xl bg-white/10"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
        }}
      ></div>

      {/* Contenido */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
        Pasa el mouse aquí
      </div>
    </div>
  );
};

export default DistortedBackground;

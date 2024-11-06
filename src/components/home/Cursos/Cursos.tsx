'use client'
import React, { useEffect, useState } from 'react';
import { Dancing_Script } from 'next/font/google';
import Image from 'next/image';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
});

interface SectionProps {
  title: string;
  subtitle: string;
  header: string;
  children: React.ReactNode;
}

const imagePaths = [
  '/images/sobre-mi.webp',
  '/images/sobre-mi1.webp', // Añade más rutas de imágenes
  '/images/sobre-mi2.webp',
  '/images/sobre-mi3.webp',
];

export const Cursos: React.FC<SectionProps> = ({ title, subtitle, header, children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Inicia el fade-out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
        setFade(true); // Inicia el fade-in para la siguiente imagen
      }, 500); // Duración del fade-out antes de cambiar la imagen
    }, 3500); // Cambia cada 3.5 segundos

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="px-4 py-6 md:px-8 md:py-10 lg:py-16 bg-gray-100 h-auto bg-cover"
    style={{
      backgroundImage: 'url("/background/cursos.svg")',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    >
      <div className={`${dancingScript.className} mx-auto text-center mt-9 flex flex-col md:flex-row items-center md:items-start`}>
        <div className="md:hidden flex flex-col items-center justify-center">
          <h1 className="font-bold text-gray-800 text-[2.25rem] sm:text-[3rem]">{title}</h1>
          <p className="md:text-base lg:text-lg w-7/12 sm:w-1/2 mt-4 font-subtitle text-subtitle-mobile-md font-medium text-black">
            {subtitle}
          </p>
        </div>
        <h2 className="text-[2.25rem] font-title font-semibold text-black md:hidden md:text-xl lg:text-2xl mt-28 mb-3">
          {header}
        </h2>
        <div className="flex justify-center mb-8 md:hidden">{children}</div>

        {/* Vista Desktop */}
        <div className="hidden md:flex w-full justify-around items-center md:px-8 lg:px-16">
          <div className="my-6 w-[300px] h-[600px] xl:w-[450px] xl:h-[800px] overflow-hidden rounded-lg relative">
            <Image
              src={imagePaths[currentImageIndex]}
              alt="Imagen de la sección"
              objectFit="cover"
              layout="fill"
              className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
          <div className="flex flex-col items-start justify-start w-1/2">
            <h1 className="text-start font-bold text-gray-800 text-[3.5rem] sm:text-[4rem] lg:text-[5rem]">{title}</h1>
            <p className="md:text-base md:text-left md:flex lg:text-xl xl:text-2xl mt-4 font-subtitle text-subtitle-mobile-md font-medium text-black">
            Nuestros cursos de uñas están diseñados para ofrecerte la mejor formación en técnicas de manicura, adaptándose a tu estilo de vida y nivel de experiencia. Ya sea que prefieras clases presenciales para una experiencia práctica o cursos online para mayor flexibilidad, cada modalidad cubre desde los conceptos básicos hasta técnicas avanzadas en diseño y aplicación de uñas. Sumérgete en el mundo de la belleza de uñas y aprende a llevar tus habilidades al siguiente nivel con capacitaciones que combinan teoría, práctica y tendencias actuales. ¡Transforma tu pasión en una verdadera profesión!
            </p>
          </div>
        </div>
      </div>

      <h3 className="hidden md:flex md:justify-center md:mt-12 md:mb-6 text-black text-[4rem] font-title sm:text-[5rem]">
        Modalidades
      </h3>
      <div className="hidden md:grid gap-4 w-3/4 max-w-screen-lg mx-auto md:grid-cols-2 md:grid-rows-2 md:grid-flow-row">
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center fluid-bg">
          <h3 className="text-lg font-semibold text-black">Presencial</h3>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center fluid-bg">
          <h3 className="text-lg font-semibold text-black">Online</h3>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center fluid-bg col-span-2">
          <h3 className="text-lg font-semibold text-black">Mira nuestras clases</h3>
        </div>
      </div>
    </section>
  );
};

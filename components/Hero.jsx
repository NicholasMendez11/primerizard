import React, { useState } from "react";
import Image from "next/image";
import bgImage from "../public/heroBackground.jpeg";
import bgImageColor from "../public/background.jpeg";
function Hero() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="relative w-full h-full pb-10  bg-gradient-to-b from-[#ffffff] to-[#F2E3E9]">
        <div className="">
          {/* <Image
            className="absolute bg-cover bg-center w-full h-full inset-0"
            src="/../public/background.jpeg"
            width={1880}
            height={1800}
            alt="background"
          /> */}
        </div>

        <div className="relative px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
          <div className="text-color w-full md:w-1/3 pt-16 lg:pt-32 xl:pt-12">
            <h1 className="text-center md:text-left text-4xl md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-[#B5597E] font-extrabold f-f-l">
              Bienvenida a nuestra comunidad
            </h1>
            <div className="f-f-r text-base lg:text-base pb-20 sm:pb-0 pt-10 xl:pt-6">
              <h2 className="md:w-8/8 py-1 text-center md:text-left md:py-1 text-gray-700 text-lg lg:text-2xl">
                PrimerizaRD es una comunidad de apoyo para madres en cualquier
                etapa de su maternidad, ya sea embarazo, lactancia,
                alimentación, bebés de más de 1 año y para mamás que ya no sean
                primerizas. Realizamos Charlas, Talleres, Foros y mucho más!
              </h2>
            </div>
            <div className="lg:flex">
         
              <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r p-4  bg-[#b5597e] text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
              <a  href="#about">
                Sobre Nostros
                </a>
              </button>
              
              <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r p-4 ml-3 bg-[#b5597e] text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">
              <a   target="_blank"
      rel="noopener noreferrer" href="https://www.youtube.com/watch?v=-GI-cavdPjM&t=28s&ab_channel=PrimerizaRD">
               
                Escucha Nuestro Podcast
                </a>
              </button>
            </div>
          </div>
          <Image
            className="w-full   object-fill md:w-2/3 md:-ml-4 lg:-ml-4 xl:ml-0 py-16 rounded-2xl"
            src={bgImage}
            alt="background image"
            role="img"
          />
          <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-[#b5597ef9] text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg p-9">
          Sobre Nosotros
          </button>
          <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-[#b5597ef9] text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg p-9">
            Escucha Nuestro Podcast
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;

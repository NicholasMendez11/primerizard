import React from "react";
import Imagen from "../public/assets/baby.png";
import Image from "next/image";
export default function NewsLetter() {
  return (
    <div className="mx-auto py-16 px-6 bg-[#f2e3e9]">
      <div className="flex flex-col lg:flex-row justify-center items-center xl:space-x-44 lg:space-x-24 space-y-8 lg:space-y-0">
        <div className="md:px-12 lg:px-0 flex flex-col justify-start items-start lg:w-2/5 xl:w-3/12">
          <div>
            <p className="text-sm leading-3 font-semibold text-[#b5597e] ">Descargalo ya</p>
          </div>
          <div className="xl:mt-4 mt-2">
            <p className="text-3xl lg:text-3xl xl:text-4xl font-medium  text-[#b5597e] text-center md:text-left tracking-tighter f-f-i md:w-7/10 leading-tight text-heading-color">
              Guía para Almacenar Leche Materna
            </p>
          </div>
          <div className="xl:mt-4 mt-4">
            <p className="md:w-8/8 py-1 text-center md:text-left md:py-1 text-gray-700 text-lg lg:text-2xl">
              Encuentra todas las recomendaciones del manejo y almacenaje de la
              leche materna para que te sientas confiada de brindarle una leche
              segura y saludable a tu bebé.
            </p>
          </div>

          <label htmlFor="email" className="block py-3 font-semibold text-[#b5597e]">
            Your Email
          </label>
          <div className="flex items-center p-2 border  border-[#89425e] rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#b5597e] w-7 h-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <input
              type="email"
              placeholder="your@email.com"
              id="email"
              className="w-full p-1 ml-3 text-[#272121] outline-none bg-transparent placeholder:text-[#b5597e]"
            />
          </div>

          <div className="xl:mt-4 mt-2 w-full">
            <button className="hover:opacity-90 bg-[#88BFD4] py-4 px-5 lg:py-5 lg:px-10 rounded-md text-white font-bold text-lg md:text-sm f-f-p mx-4">
              Descargar
            </button>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ZWzmKqL/baby.png" alt="girl" />
        </div>
      </div>
    </div>
  );
}

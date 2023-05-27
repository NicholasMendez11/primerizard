import React from "react";
import Imagen from "../public/assets/baby.png";
import Image from "next/image";
import { motion } from "framer-motion";
export default function NewsLetter() {
  const pdf = "../public/cv.pdf";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 0.5, 0.8, 1] }}
      transition={{ duration: 1 }}
      className="mx-auto py-16 px-6 bg-[#f2e3e9]"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center xl:space-x-44 lg:space-x-24 space-y-8 lg:space-y-0">
        <div className="md:px-12 lg:px-0 flex flex-col justify-start items-start lg:w-2/5 xl:w-3/12">
          <div>
            <motion.p
              initial={{ opacity: -10 }}
              whileInView={{ opacity: 1 }}
              className="text-sm leading-3 font-semibold text-[#b5597e] "
            >
              Descargalo ya
            </motion.p>
          </div>
          <div className="xl:mt-4 mt-2">
            <motion.p
              initial={{ x: 300 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl lg:text-3xl xl:text-4xl font-medium  text-[#b5597e] text-center md:text-left tracking-tighter f-f-i md:w-7/10 leading-tight text-heading-color"
            >
              Guía para Almacenar Leche Materna
            </motion.p>
          </div>
          <div className="xl:mt-4 mt-4 mb-4">
            <motion.p
              initial={{ x: -300 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              className="md:w-8/8 py-1 text-center md:text-left md:py-1 text-gray-700 text-lg lg:text-2xl"
            >
              Encuentra todas las recomendaciones del manejo y almacenaje de la
              leche materna para que te sientas confiada de brindarle una leche
              segura y saludable a tu bebé.
            </motion.p>
          </div>

          <div className="xl:mt-4  w-full mt-10">
            <a
              target="_blank"
              href="https://prezi.com/view/wVsCOEZS8QfupXm2qQZM/"
              className="hover:opacity-90 bg-[#88BFD4] py-4 px-5 lg:py-5  lg:px-10 rounded-md text-white font-bold text-lg md:text-sm f-f-p mx-4"
              download
            >
              Descubrir
            </a>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ZWzmKqL/baby.png" alt="girl" />
        </div>
      </div>
    </motion.div>
  );
}

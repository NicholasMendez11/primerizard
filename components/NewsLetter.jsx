import React from "react";
import { motion } from "framer-motion";
export default function NewsLetter() {
  


  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 0.5, 0.8, 1] }}
      transition={{ duration: 1 }}
      className="mx-auto py-16 px-6 bg-[#f2e3e9]"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center xl:space-x-44 lg:space-x-24 space-y-8 lg:space-y-0">
        <div className="px-12  lg:px-8 flex flex-col justify-start items-start lg:w-2/5 xl:w-3/12">
          <div>
            <motion.p
              initial={{ opacity: -10 }}
              whileInView={{ opacity: 1 }}
              className="text-sm leading-3 font-semibold text-[#b5597e] w-screen text-center md:text-left "
            >
              Descárgalo ya
            </motion.p>
          </div>
          <div className="xl:mt-4 mt-2">
            <motion.p
              initial={{ x: 300 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl lg:text-3xl xl:text-4xl font-medium  text-[#b5597e] text-center md:text-left w-screen lg:text-left tracking-tighter f-f-i md:w-7/10 leading-tight text-heading-color"
            >
              Lactancia 101 - Todo lo que debes saber
            </motion.p>
          </div>
          <div className="xl:mt-4 mt-4 mb-4">
            <motion.p
              initial={{ x: -300 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
              className="md:w-8/8 py-1 text-center md:text-left md:py-1 text-gray-700 text-lg lg:text-2xl"
            >
Encuentra aquí una guía con todas las recomendaciones para iniciar tu lactancia, para que te sientas confiada en el momento de la llegada de tu bebé. </motion.p>
          </div>

          <div className="xl:mt-4 mt-10 flex items-center justify-center  md:justify-start w-screen">
            <a
              className="hover:opacity-90 bg-[#88BFD4] py-4 px-5 lg:py-5  lg:px-10 rounded-md text-white font-bold text-lg md:text-sm f-f-p mx-4"
             
              href="https://drive.google.com/u/2/uc?id=1n13Cuwj-dxG6XZI8uS-gxxj3kWNfjKP1&export=download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descubrir
            </a>
          </div>
        </div>
        <div>
          <motion.img src="https://i.ibb.co/ZWzmKqL/baby.png" alt="girl" />
        </div>
      </div>
    </motion.div>
  );
}

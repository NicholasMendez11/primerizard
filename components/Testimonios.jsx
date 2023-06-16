import React, { useState } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { motion } from "framer-motion";
export default function Testimonios() {
  return (
    <div>
      <div className="lg:px-20 md:px-6 px-4 py-12 ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl lg:text-3xl xl:text-4xl font-medium  text-[#b5597e] text-center md:text-left tracking-tighter f-f-i md:w-7/10 leading-tight text-heading-color">
            Testimonios
          </h1>
          <p className="text-basepy-1  md:text-left md:py-1  text-lg lg:text-2xl leading-6 mt-4 text-center text-gray-600  ">
            Mira lo que dicen algunas de las madres que hemos acompañado en los
            últimos años
          </p>
        </div>
        <div className=" w-full lg:flex flex-wrap items-center gap-6 mt-10">
          <div>
            <motion.div
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              className="bg-white border rounded-md border-[#88BFD4]  duration-300 hover:shadow-2xl hover:shadow-[#88BFD4] relative sm:p-10 p-6 hover:cursor-pointer hover:scale-105"
            >
              <div>
                <AiTwotoneHeart color="#b5597e" size={25} />
              </div>
              <p className="text-basepy-1 md:text-left md:py-1  text-lg lg:text-2xl leading-6 mt-4 text-center text-gray-600 ">
                Primeriza para mi, significa confianza en mí y en mi rol de
                madre primeriza, actuar serena antes ciertas situaciones. Tener
                una gran familia que vive la caótica vida de madre al igual que
                yo con altas y bajas y que sus experiencias a sobrellevar el día
                a día… Gracias Dios siempre por la labor que hacen cada día
              </p>
              <div className="absolute bottom-0 -mb-4 ml-10">
                <motion.img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg"
                  alt="sharp"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 4, x: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center mt-7"
            >
              <div className="w-12 h-12 border border-[#b5597e] rounded-full flex items-center justify-center">
                <motion.img
                  src="https://i.ibb.co/VwR39Mk/Heidy-Lanfranco.jpg"
                  className="w-10 h-10 rounded-full"
                  alt="profile"
                />
              </div>
              <div className="flex flex-col items-start ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Heidi Lanfranco
                </p>
              </div>
            </motion.div>
          </div>
          <div className=" lg:mt-0 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 4, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-white border rounded-md border-[#88BFD4]  duration-300 hover:shadow-2xl hover:shadow-[#88BFD4] relative sm:p-10 p-6 hover:cursor-pointer hover:scale-105"
            >
              <div>
                <AiTwotoneHeart color="#b5597e" size={25} />
              </div>
              <p className="text-basepy-1 md:text-left md:py-1 text-gray-700 text-lg lg:text-2xl leading-6 mt-4 text-center ">
                ¡De mucha ayuda ! Yo nunca pensé que iba a lactar cuando tenga
                hijos y lo hice exclusiva 6 meses y toda las informaciones que
                brindan en cada grupo fueron de mucha ayuda ya que muchas veces
                quienes nos rodean nos desinforman , se siente como una Familia.
              </p>
              <div className="absolute bottom-0 -mb-4 ml-10">
                <motion.img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg"
                  alt="sharp"
                />
              </div>
            </motion.div>
            <div className="flex items-center mt-7">
              <div className="w-12 h-12 border border-[#b5597e] rounded-full flex items-center justify-center">
                <motion.img
                  src="https://i.ibb.co/C6bwf12/Mask-Group.png"
                  className="w-10 h-10 rounded-full"
                  alt="profile"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 4, x: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-start ml-4"
              >
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Dra. Perla Navarro{" "}
                </p>
              </motion.div>
            </div>
          </div>
          <div className=" lg:mt-0 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 4, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-white border rounded-md border-[#88BFD4]  duration-300 hover:shadow-2xl hover:shadow-[#88BFD4] relative sm:p-10 p-6 hover:cursor-pointer hover:scale-105"
            >
              <div>
                <AiTwotoneHeart color="#b5597e" size={25} />
              </div>
              <p className="text-basepy-1 md:text-left md:py-1 text-gray-700 text-lg lg:text-2xl leading-6 mt-4 text-center ">
                Primeriza ha representado un antes y un después en mi vida, fue
                mi tribu de apoyo en la lactancia, porque cuando decidí lactar
                no tenía nada de información y al llegar a los grupos aprendí
                bastante, me empodere , además de las informaciones te animan y
                motivan a lograr tu metas. Te apoyan en los momentos difíciles y
                se crean lazos muy bonitos de amistad y gratitud. Es lo mejor
                para la maternidad.
              </p>
              <div className="absolute bottom-0 -mb-4 ml-10">
                <motion.img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg"
                  alt="sharp"
                />
              </div>
            </motion.div>
            <div className="flex items-center mt-7">
              <div className="w-12 h-12 border border-[#b5597e] rounded-full flex items-center justify-center">
                <motion.img
                  src="https://i.ibb.co/C6bwf12/Mask-Group.png"
                  className="w-10 h-10 rounded-full"
                  alt="profile"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 4, x: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-start ml-4"
              >
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Yuleisy Rosario
                </p>
              </motion.div>
            </div>
          </div>
          <div className=" lg:mt-0 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 4, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-white border rounded-md border-[#88BFD4]  duration-300 hover:shadow-2xl hover:shadow-[#88BFD4] relative sm:p-10 p-6 hover:cursor-pointer hover:scale-105"
            >
              <div>
                <AiTwotoneHeart color="#b5597e" size={25} />
              </div>
              <p className="text-basepy-1 md:text-left md:py-1 text-gray-700 text-lg lg:text-2xl leading-6 mt-4 text-center ">
                Es esa figura que me permite sentir un apoyo, no solo a nivel de
                maternidad sino personal, saber que por más raro que suene algo,
                alguien más estará viviendo lo mismo que tú. Es amor sin esperar
                nada a cambio; respeto, unión, hermandad.
              </p>
              <div className="absolute bottom-0 -mb-4 ml-10">
                <motion.img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg"
                  alt="sharp"
                />
              </div>
            </motion.div>
            <div className="flex items-center mt-7">
              <div className="w-12 h-12 border border-[#b5597e] rounded-full flex items-center justify-center">
                <motion.img
                  src="https://i.ibb.co/smHLkSR/Keila-vasquez.jpg"
                  className="w-10 h-10 rounded-full"
                  alt="profile"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 4, x: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-start ml-4"
              >
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Keila Vasquez
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

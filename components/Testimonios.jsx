import React, { useState } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
export default function Testimonios() {
  return (
    <div>
      <div className="lg:px-20 md:px-6 px-4 py-12 ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl lg:text-3xl xl:text-4xl font-medium  text-[#b5597e] text-center md:text-left tracking-tighter f-f-i md:w-7/10 leading-tight text-heading-color">
            Testimonios
          </h1>
          <p className="text-basepy-1 text-left md:text-left md:py-1 text-gray-700 text-lg lg:text-2xl leading-6 mt-4 text-center text-gray-600  ">
            Mira lo que dicen algunas de las madres que hemos acompañado en los
            últimos años
          </p>
        </div>
        <div className=" w-full lg:flex flex-wrap items-center gap-6 mt-10">
          <div>
            <div className="bg-white border rounded-md border-[#88BFD4]  duration-300 hover:shadow-2xl hover:shadow-[#88BFD4] relative sm:p-10 p-6 hover:cursor-pointer hover:scale-105">
              <div>
                <AiTwotoneHeart color="#b5597e" size={25} />
              </div>
              <p className="text-basepy-1 md:text-left md:py-1 text-gray-700 text-lg lg:text-2xl leading-6 mt-4 text-center text-gray-600 ">
                En el momento que te pedí consulta estaba super preocupada y
                estresada porque ya mi bebé tenía alimentación complementaria,
                pero más de la mitad de las tomas eran fórmula porque no estaba
                produciendo suficiente.
              </p>
              <div className="absolute bottom-0 -mb-4 ml-10">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg"
                  alt="sharp"
                />
              </div>
            </div>
            <div className="flex items-center mt-7">
              <div className="w-12 h-12 border border-[#b5597e] rounded-full flex items-center justify-center">
                <img
                  src="https://i.ibb.co/R6WQhYj/Mask-Group.png"
                  className="w-10 h-10 rounded-full"
                  alt="profile"
                />
              </div>
              <div className="flex flex-col items-start ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Alisha
                </p>
                <p className="text-base leading-4 mt-2 text-center text-gray-600">
                  Asesoria virtual
                </p>
              </div>
            </div>
          </div>
          <div className=" lg:mt-0 mt-16">
            <div className="bg-white border rounded-md border-[#88BFD4]  duration-300 hover:shadow-2xl hover:shadow-[#88BFD4] relative sm:p-10 p-6 hover:cursor-pointer hover:scale-105">
              <div>
                <AiTwotoneHeart color="#b5597e" size={25} />
              </div>
              <p className="text-basepy-1 md:text-left md:py-1 text-gray-700 text-lg lg:text-2xl leading-6 mt-4 text-center ">
              ¡Muchísimas gracias por compartir todos tus conocimientos! Te confieso que anteriormente he tomado otros talleres y la verdad no había quedado conforme por la manera en que lo explicaban y porque todo era muy teórico. No lo sentía real, no se me parecía a lo que realmente se vive. Me encantó tu estilo, porque eres realista, práctica, nada estricta. 100% justo lo que necesitaba.
              </p>
              <div className="absolute bottom-0 -mb-4 ml-10">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg"
                  alt="sharp"
                />
              </div>
            </div>
            <div className="flex items-center mt-7">
              <div className="w-12 h-12 border border-[#b5597e] rounded-full flex items-center justify-center">
                <img
                  src="https://i.ibb.co/C6bwf12/Mask-Group.png"
                  className="w-10 h-10 rounded-full"
                  alt="profile"
                />
              </div>
              <div className="flex flex-col items-start ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Maggie
                </p>
                <p className="text-base leading-4 mt-2 text-center text-gray-600">
                Curso: Iniciando la lactancia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

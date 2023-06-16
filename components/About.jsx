import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "../public/assets/PrimerizaRD_logo.webp";
import Talk1 from "../public/talk.jpeg"
const About = () => {
  const videoSrc = {
    type: "video",
    sources: [
      {
        src: "https://drive.google.com/file/d/1rqbUbf27ZIaawLtYOXOB2AWZd9fGqKri/view",
        provider: "youtube",
        size: 720,
      },
    ],
  };
  return (
    <div
      id="about"
      className=" 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-white"
    >
      <div className="lg:w-10/12 w-full">
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 4, x: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl lg:text-3xl xl:text-4xl font-medium  text-[#b5597e] text-center md:text-left tracking-tighter f-f-i md:w-7/10 leading-tight text-heading-color"
        >
          ¡Hola! Somos{" "}
          <span className="primerizaLetter text-[#88BFD4]">Primeriza RD</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 4, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-8/8 py-1 text-center md:text-left md:py-1 text-gray-700 text-lg lg:text-2xl"
        >
          PrimerizaRD nace por el interés de Alfania Mendoza de compartir con
          otras madres primerizas sus vivencias, cursos e información aprendida
          en el embarazo, y lo hace desde un grupo que inicio el 3 de Julio del
          2018 cuyo nombre era “Primerizas”, las mismas eran integrantes de las
          clases prenatales.
        </motion.p>
      </div>

      <motion.div
        initial={{ x: 300 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className="lg:mt-14 sm:mt-10 mt-12"
      >
        <motion.img
          className="lg:block hidden w-full"
          src="https://i.ibb.co/GvwJnvn/Group-736.png"
          alt="Group of people Chilling"
        />
        <motion.img
          className="lg:hidden sm:block hidden w-full"
          src="https://i.ibb.co/5sZTmHq/Rectangle-116.png"
          alt="Group of people Chilling"
        />
        <motion.img
          className="sm:hidden block w-full"
          src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png"
          alt="Group of people Chilling"
        />
      </motion.div>

      <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
        <div className=" xl:w-5/12 lg:w-6/12">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 4, x: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl lg:text-3xl xl:text-4xl font-medium  text-[#b5597e] text-center md:text-left tracking-tighter f-f-i md:w-7/10 leading-tight text-heading-color"
          >
            Nuestra Historia
          </motion.h2>
          <div className="grid md:grid-cols-2 w-screen ">
            <div>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 4, x: 0 }}
                transition={{ duration: 1 }}
                className="py-1 text-left md:text-left md:py-1 text-gray-700 text-lg lg:text-2xl"
              >
                Alfania, quien padecía endometriosis previa al embarazo, decidió
                iniciar a tomar clases y talleres que se compartían mediante
                este pequeño grupo. Que, para octubre de este mismo año y ya con
                su hija y siendo primeriza de 2 meses, decide incursionar en
                Instagram y convierte un perfil de “cocina” que tenía y le
                cambia el nombre, colocándole PrimerizaRD, y vaya sorpresa,
                ¡estaba disponible!
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 4, x: 0 }}
                transition={{ duration: 1 }}
                className="py-1 text-left md:text-left md:py-1 text-gray-700 text-lg lg:text-2xl"
              >
                Para febrero del 2019 planeamos nuestra primera actividad
                presencial, la cual se estuvo realizando en Centracare y con el
                apoyo de varios profesionales de salud y maternidad, aquí
                conversamos sobre Parto, Lactancia y maternidad. Los pilares
                educativos de nuestra comunidad desde el día uno. Dentro de los
                expositores que nos acompañaron estuvo la Doula Sary Méndez de
                NaciendoRD quien nos educó sobre los aspectos más importes del
                parto y el Dr. Luis Moisés Ramírez Montas, ginecólogo obstetra
                quien estuvo a cargo del cuidado post parto.
              </motion.p>
            </div>
            <div className="px-16">
              <motion.img
                initial={{ x: 300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="  "
                src="https://i.ibb.co/7g6JyDR/8e084c60-246f-41b3-bd2c-2cdc13955348.jpg"
                alt="Group of people Chilling"
              />
            </div>
          </div>
          <div className="w-screen grid md:grid-cols-2 mr-20">
            <div>
              <motion.img
                initial={{ x: -300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="px-16 mt-10"
                src="https://i.ibb.co/7tsh5Zf/IMG-7880.jpg"
                alt="Group of people Chilling"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 4, x: 0 }}
              transition={{ duration: 1 }}
              className="container"
            >
              <p className="mt-10 py-5 text-center md:text-left md:py-5 text-gray-700 text-lg lg:text-2xl m-r20">
                Esta actividad conto con la asistencia de 45 madres, las cuales
                recibieron regalos de Productos Palmers, Mamilas Cleans,
                Mamacare, Agua Alaska, entre otros. Nuestro equipo directivo
                (que para este momento no era denominado de esta forma) también
                se encargo de que las madres, además de recibir regalos,
                recibieran Kits de bienvenida de nuestros eventos, los cuales
                han sido una referencia en cada una de nuestras actividades a lo
                largo de los años.
              </p>
              
            </motion.div>
            <div>
              <p className=" w-screen text-center md:text-left  text-gray-700 text-lg lg:text-2xl mt-20 container">
                Para el 2020 la comunidad ya contaba casi con 10mil seguidores
                mediante las redes y se organizó una estructura en los grupos
                para separar las madres embarazadas, lactantes, en etapa de
                alimentación y más. También continuamos con diversas actividades
                en pro de continuar apoyando las madres En Julio 2022 realizamos
                ExpoPrimerizaRD, para la cual nuestra comunidad congrego mas de
                mil madres con interés en aprender sobre temas de maternidad
              </p>
              <Image src={Logo} className="h-1/2 w-1/2 self-center" />
              <p className=" w-screen text-center md:text-left  text-gray-700 text-lg lg:text-2xl container">
                En el 2023 iniciamos con el podcast y haciendo uso de otras
                herramientas de trabajo de las cuales hoy eres parte al leer
                nuestra página WEB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

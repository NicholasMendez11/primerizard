import Image from "next/image";
import React from "react";
import Bebito from "../public/Bebito.png";
import eikers from "../public/eikers.png";
import MAMILA from "../public/MAMILA.png";
import philips from "../public/philips.png";
import progreso from "../public/progreso.png";
import Rapeel from "../public/Rapeel.png";
import SLEEPY from "../public/SLEEPY.png";
import { motion } from "framer-motion";
function Partners() {
  return (
    <>
      <div className="px-4 py-12 bg-white">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] w-full  py-12 lg:px-10  md:px-6 px-4 bg-white mx-auto">
          <div className="flex flex-col lg:justify-between lg:flex-row gap-x-8 gap-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 4, x: 0 }}
              transition={{ duration: 0.5 }}
              aria-label="text-area"
              className="mb-7"
            >
              <p className="text-3xl lg:text-3xl xl:text-4xl font-medium  text-[#b5597e] text-center md:text-left tracking-tighter f-f-i md:w-7/10 leading-tight text-heading-color">
                Trabajamos con los mejores colaboradores
              </p>
              <p className="md:w-8/8 py-1 text-center md:text-left md:py-1 text-gray-700 text-lg lg:text-xl">
                Nuestro equipo de colaboradores es la piedra angular de nuestro
                éxito. Su dedicación, experiencia y pasión nos impulsan a
                alcanzar nuevas metas.
              </p>
              <div className="flex flex-row mt-10">
                <a  target="_blank" href="https://www.instagram.com/escudeard/" rel="noreferrer">
              <motion.img
                  srcSet="https://i.ibb.co/LNSfJYF/escudealogo.png"
                  alt="brand"
                  className="mx-4 w-[200px] hover:cursor-pointer"
                  whileInView={{ opacity: 4, x: 0, rotate:0 }}
                  whileHover={{ rotate: [-5, 5, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                />
                  </a>
                  <a  target="_blank" href="https://www.instagram.com/bebito_rd/?hl=es" rel="noreferrer">
              <motion.img
                  srcSet="https://i.ibb.co/8DyT0WH/Logo-Hidra-Rizos-page-0001.jpg"
                  alt="brand"
                  className="mx-4 w-[200px] hover:cursor-pointer"
                  whileInView={{ opacity: 4, x: 0 }}
                  whileHover={{ rotate: [-5, 5, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                /></a>
              </div>
            </motion.div>

            <div className="w-full  grid grid-cols-2 justify-center p-2">
              <motion.div>
              <a  target="_blank" href="https://www.instagram.com/natalbenrd/?hl=es" rel="noreferrer">
                <motion.img
                  srcSet="https://www.natalben.com/sites/default/files/inline-images/natalben-supra-logo.png"
                  alt="brand"
                  className="mx-4 w-[200px] hover:cursor-pointer"
                  whileInView={{ opacity: 4, x: 0, rotate:0 }}
                  whileHover={{ rotate: [-5, 5, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                />
                </a>
              </motion.div>
              <a  target="_blank" href="https://www.instagram.com/bebito_rd/?hl=es" rel="noreferrer">
              <motion.div
                 whileInView={{ opacity: 4, x: 0, rotate:0 }}
                 whileHover={{ rotate: [-5, 5, -5, 5, 0] }}
                 transition={{ duration: 0.3 }}
                className="hover:cursor-pointer"
              >
                <Image src={Bebito} alt="brand" width={200} className="mx-4" />
              </motion.div>
              </a>
              <a  target="_blank" href="https://www.instagram.com/mamilascleans/?hl=es" rel="noreferrer">
              <motion.div
                whileInView={{ opacity: 4, x: 0, rotate:0 }}
                whileHover={{ rotate: [-5, 5, -5, 5, 0] }}
                transition={{ duration: 0.3 }}
                className="hover:cursor-pointer"
              >
                <Image src={MAMILA} width={200} alt="brand" className="mx-4" />
              </motion.div>
              </a>
              <a  target="_blank" href="https://www.instagram.com/philipsaventrd/?hl=es" rel="noreferrer">
              <motion.div
                 whileInView={{ opacity: 4, x: 0, rotate:0 }}
                 whileHover={{ rotate: [-5, 5, -5, 5, 0] }}
                 transition={{ duration: 0.3 }}
                className="hover:cursor-pointer"
              >
                <Image src={philips} width={200} alt="brand" className="mx-4" />
              </motion.div>
              </a>
              <a  target="_blank" href="https://www.instagram.com/almacenesprogreso/?hl=es" rel="noreferrer">
              <motion.div
               whileInView={{ opacity: 4, x: 0, rotate:0 }}
               whileHover={{ rotate: [-5, 5, -5, 5, 0] }}
               transition={{ duration: 0.3 }}
                className="hover:cursor-pointer"
              >
                <Image
                  src={progreso}
                  width={200}
                  alt="brand"
                  className="mx-4"
                />
              </motion.div>
              </a>
              <a  target="_blank" href="https://www.instagram.com/repelaidrd/?hl=es" rel="noreferrer">
              <motion.div
                whileInView={{ opacity: 4, x: 0, rotate:0 }}
                whileHover={{ rotate: [-5, 5, -5, 5, 0] }}
                transition={{ duration: 0.3 }}
                className="hover:cursor-pointer"
              >
                <Image src={Rapeel} width={200} alt="brand" className="mx-4" />
              </motion.div>
              </a>
              <a  target="_blank" href="https://www.instagram.com/sleepy.rd/?hl=es" rel="noreferrer">
              <motion.div
                 whileInView={{ opacity: 4, x: 0, rotate:0 }}
                 whileHover={{ rotate: [-5, 5, -5, 5, 0] }}
                 transition={{ duration: 0.3 }}
                className="hover:cursor-pointer"
              >
                <Image src={SLEEPY} width={200} alt="brand" className="mx-4" />
              </motion.div>
              </a>
              <a  target="_blank" href="https://www.instagram.com/eickersbabystore/?hl=es" rel="noreferrer">
              <motion.div
               whileInView={{ opacity: 4, x: 0, rotate:0 }}
               whileHover={{ rotate: [-5, 5, -5, 5, 0] }}
               transition={{ duration: 0.3 }}
                className="hover:cursor-pointer"
              >
                <Image src={eikers} width={150} alt="brand" className="mx-4" />
              </motion.div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;

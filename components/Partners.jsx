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
                We are confident that we can find the process that will help you
                meet your goals.
              </p>
            </motion.div>
            <div className="w-full  grid grid-cols-2 justify-center p-2">
              <motion.div>
                <motion.img
                  srcSet="https://www.natalben.com/sites/default/files/inline-images/natalben-supra-logo.png"
                  alt="brand"
                  className="mx-4 w-[200px] hover:cursor-pointer"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 4, x: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 2 }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 4, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 2 }}
                className="hover:cursor-pointer"
              >
                <Image src={Bebito} alt="brand" width={200} className="mx-4" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 4, x: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 2 }}
                className="hover:cursor-pointer"
              >
                <Image src={MAMILA} width={200} alt="brand" className="mx-4" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 4, x: 0 }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 2 }}
                className="hover:cursor-pointer"
              >
                <Image src={philips} width={200} alt="brand" className="mx-4" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 4, x: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 2 }}
                className="hover:cursor-pointer"
              >
                <Image
                  src={progreso}
                  width={200}
                  alt="brand"
                  className="mx-4"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 4, x: 0 }}
                transition={{ duration: 0.9 }}
                whileHover={{ scale: 2 }}
                className="hover:cursor-pointer"
              >
                <Image src={Rapeel} width={200} alt="brand" className="mx-4" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 4, x: 0 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 2 }}
                className="hover:cursor-pointer"
              >
                <Image src={SLEEPY} width={200} alt="brand" className="mx-4" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 4, x: 0 }}
                transition={{ duration: 1.1 }}
                whileHover={{ scale: 2 }}
                className="hover:cursor-pointer"
              >
                <Image src={eikers} width={150} alt="brand" className="mx-4" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;

import React from "react";
import Lottie from "lottie-react";
import whatsapp from "../../public/whatsapp.json";
import { motion } from "framer-motion";
function Fab() {
  return (
    <motion.a
      initial={{ opacity: 0, y: -700, x: -700 }}
      animate={{ opacity: 4, y: 0, x: 0, scale: [1, 1, 4, 2, 1] }}
      transition={{ duration: 1 }}
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
      rel="noreferrer"
      target="_blank"
      href="https://chat.whatsapp.com/GXKpnNfotZzD4AOxlQD83W"
      className="fixed z-90 bottom-10 right-8 bg-transparent w-30 h-30 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#b5919f25] hover:drop-shadow-2xl hover:animate-pulse duration-300"
    >
      <Lottie animationData={whatsapp} loop={true} />
    </motion.a>
  );
}

export default Fab;

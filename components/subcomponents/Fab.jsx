import React from "react";
import Lottie from "lottie-react";
import whatsapp from "../../public/whatsapp.json";
function Fab() {
  return (
    <a
      target="_blank"
      href="https://chat.whatsapp.com/GXKpnNfotZzD4AOxlQD83W"
      className="fixed z-90 bottom-10 right-8 bg-transparent w-30 h-30 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#b5919f25] hover:drop-shadow-2xl hover:animate-pulse duration-300"
    >
      <Lottie animationData={whatsapp} loop={true} />
    </a>
  );
}

export default Fab;

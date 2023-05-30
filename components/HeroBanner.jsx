import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { motion } from "framer-motion";
const HeroBanner = ({ HeroBanner }) => {
  // src={urlFor(HeroBanner.image)}
  return (
    <>
      <div className="py-12 px-4 hover:cursor-pointer">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-white relative lg:px-10 md:px-6 px-4 py-7">
          <div className="lg:max-w-[1280px] md:max-w-[696px] max-w-[343px] mx-auto bg-gray-200">
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1.5,
              }}
              className=" justify-center items-center"
            >
              <img src={urlFor(HeroBanner.image)} className="w-full h-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;

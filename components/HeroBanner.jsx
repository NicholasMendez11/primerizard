import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { motion } from "framer-motion";
import Image from "next/image";
import backgroundBanner from "../public/backgroundBanner.png";
const HeroBanner = ({ HeroBanner }) => {
  console.log(HeroBanner);
  // src={urlFor(HeroBanner.image)}
  return (
    <>
      <div className="py-12 px-4 hover:cursor-pointer">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-white relative lg:px-10 md:px-6 px-4 py-7">
          <div className="lg:max-w-[1280px] md:max-w-[696px] max-w-[343px] mx-auto bg-gray-200">
            <Link href="/">
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
                <Image src={backgroundBanner} className="w-full h-full" />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;

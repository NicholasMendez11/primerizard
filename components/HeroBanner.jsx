import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
const HeroBanner = ({ HeroBanner }) => {
  return (
    <>
      <div className=" w-screenrounded-sm  flex justify-center   bg-[#f6f8f8]">
        <div className="2xl:mx-auto 2xl:container md:px-20 px-4 md:py-12 py-9">
          <div className="relative rounded-md">
            <img
              src={urlFor(HeroBanner.image)}
              alt="primeriza podcast"
              className="w-full h-full rounded-md  object-center object-fill absolute sm:block hidden"
            />
            <img
              src="https://i.ibb.co/LQpxBsc/mobile.png"
              alt="city view"
              className="w-full h-full rounded-md absolute object-center object-fill sm:hidden"
            />
            <div className="text-xl relative z-20 bg-gradient-to-r from-[#B5597E] to-transparent w-full h-full z-40 top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
              <div>
                <h1 className="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-[#abe7ff] sm:w-auto w-64">
                  Primeriza Podcast
                </h1>
                <p className="text-lg leading-6 text-[#88BFD4] xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">
                  A good idiom for kids is "It's raining cats and dogs." Kids
                  know what both cats and dogs are from an early age.
                </p>
              </div>
              <div className="md:mt-12 mt-20">
                <button className="text-base font-medium leading-4 text-[#32b2e5] bg-white sm:w-auto w-full rounded p-4 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-white">
                  Escuchar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;

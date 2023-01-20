import Image from "next/image";
import React from "react";
import Bebito from '../public/Bebito.png'
import eikers from '../public/eikers.png'
import MAMILA from '../public/MAMILA.png'
import philips from '../public/philips.png'
import progreso from '../public/progreso.png'
import Rapeel from '../public/Rapeel.png'
import SLEEPY from '../public/SLEEPY.png'

function Partners() {
  return (
    <>
      <div className="px-4 py-12 bg-white">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] w-full  py-12 lg:px-10  md:px-6 px-4 bg-white mx-auto">
          <div className="flex flex-col lg:justify-between lg:flex-row gap-x-8 gap-y-8">
            <div aria-label="text-area" className="mb-7">
              <p className="text-3xl lg:text-3xl xl:text-4xl font-medium  text-[#b5597e] text-center md:text-left tracking-tighter f-f-i md:w-7/10 leading-tight text-heading-color">
                Trabajamos con los mejores colaboradores
              </p>
              <p className="md:w-8/8 py-1 text-center md:text-left md:py-1 text-gray-700 text-lg lg:text-xl">
                We are confident that we can find the process that will help you
                meet your goals.
              </p>
            </div>
            <div className="w-full md:flex flex-wrap justify-center p-2">
              <div>
                <img
                  srcSet="https://www.natalben.com/sites/default/files/inline-images/natalben-supra-logo.png"
                  alt="brand"
                  className="mx-4 w-[200px]"
                />
              </div>
              <div>
                <Image
                  src={Bebito}
                  alt="brand"
                  width={200}
                  className="mx-4"
                />
              </div>
              <div>
                <Image
                  src={MAMILA}
                  width={200}
                  alt="brand"
                  className="mx-4"
                />
              </div>
              <div>
                <Image
                  src={philips}
                  width={200}
                  alt="brand"
                  className="mx-4"
                />
              </div>
              <div>
                <Image
                  src={progreso}
                  width={200}
                  alt="brand"
                  className="mx-4"
                />
              </div>
              <div>
                <Image
                  src={Rapeel}
                  width={200}
                  alt="brand"
                  className="mx-4"
                />
              </div>
              <div>
                <Image
                  src={SLEEPY}
                  width={200}
                  alt="brand"
                  className="mx-4"
                />
              </div>
              <div>
                <Image
                  src={eikers}
                  width={150}
                  alt="brand"
                  className="mx-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;

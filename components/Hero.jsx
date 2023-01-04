import React, { useState } from "react";
import Imagen from '../public/assets/mom.png'
import Image from "next/image";
function Hero() {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="lg:px-6 xl:px-0">
                <div className="container mx-auto relative z-20">
                    
                </div>
                <div className="mx-auto container relative z-0 px-4 xl:px-0">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-30">
                            <h1 className="text-3xl lg:text-3xl xl:text-5xl font-medium text-[#b5597e] text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">Prepárate para lactar a tu bebé con amor y sin miedos</h1>
                            <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-700 text-lg lg:text-2xl">Asesorías personalizadas y cursos online que te brindan apoyo con tu lactancia desde el embarazo hasta el postparto. </h2>
                            <div className="w-full flex justify-center md:block">
                                <button className="hover:opacity-90 bg-[#B5597E] py-4 px-5 lg:py-5 lg:px-10 rounded-md text-white font-bold text-lg md:text-sm f-f-p mx-4">Conoce mis cursos</button>
                                <button className="hover:opacity-90 bg-[#B5597E] py-4 px-5 lg:py-5 lg:px-10 rounded-md text-white  font-bold text-lg md:text-sm f-f-p">Agenda una asesoría</button>
                            </div>
                        </div>
                        <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-4 flex items-center overflow-hidden">
                            {/* <img class="h-full" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Rectangle.png" alt="Device" /> */}
                            <Image className=""  src={Imagen} alt="Image"  />
                        
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;

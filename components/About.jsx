import React from "react";

const About = () => {
  return (
    <div className=" 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-white">
      <div className="lg:w-10/12 w-full">
        <h2 className="text-3xl lg:text-3xl xl:text-4xl font-medium  text-[#b5597e] text-center md:text-left tracking-tighter f-f-i md:w-7/10 leading-tight text-heading-color">
          ¡Hola! Somos{" "}
          <span className="primerizaLetter text-[#88BFD4]">Primeriza RD</span>
        </h2>
        <p className="md:w-8/8 py-1 text-center md:text-left md:py-1 text-gray-700 text-lg lg:text-2xl">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum.In the first place we have granted to God, and by
          this our present charter confirmed for us and our heirs forever that
          the English Church shall be free, and shall have her rights entire,
        </p>
      </div>

      <div className="lg:mt-14 sm:mt-10 mt-12">
        <img
          className="lg:block hidden w-full"
          src="https://i.ibb.co/GvwJnvn/Group-736.png"
          alt="Group of people Chilling"
        />
        <img
          className="lg:hidden sm:block hidden w-full"
          src="https://i.ibb.co/5sZTmHq/Rectangle-116.png"
          alt="Group of people Chilling"
        />
        <img
          className="sm:hidden block w-full"
          src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png"
          alt="Group of people Chilling"
        />
      </div>

      <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
        <div className="w-full xl:w-5/12 lg:w-6/12">
          <h2 className="text-3xl lg:text-3xl xl:text-4xl font-medium  text-[#b5597e] text-center md:text-left tracking-tighter f-f-i md:w-7/10 leading-tight text-heading-color">
            Nuestra Historia
          </h2>
          <p className="py-1 text-left md:text-left md:py-1 text-gray-700 text-lg lg:text-2xl">
            Alguien me dijo en alguna ocasión que cuando eres madre es cuando
            aprendes a valorar el verdadero significado de una amistad, pues
            tienes a alguien que se contacta contigo para saber de ti, de tus
            hijos de tu entorno. A lo largo de los años de esta comunidad han
            pasado muchas mujeres, sin embargo, en aquel primer grupo de julio
            de 2018 llegaron mujeres que cambiarían mi concepto de la maternidad
            y me ayudarían a entender el valor de una tribu.
          </p>
          <p className="py-1 text-left md:text-left md:py-1 text-gray-700 text-lg lg:text-2xl">
            Ojalá poder compartir con cada madre de esta comunidad y que todas
            puedan contar con un grupo de amigas donde, en tiempo prudente,
            puedan tener una reunión y compartir para llenarse de energía unas a
            otras, porque esto es necesario, reconconfortante y sobre todo
            desestresante. No importa si es una, dos o 15, tener una amiga mamá
            es un privilegio que debemos agradecer. Por más y mejores momentos
            como estos! Gracias por ser parte de mi maternidad. ¿Tienes a
            alguien así en tu vida? Hoy es un buen día para darle las gracias.
          </p>
        </div>
        <div className="lg:flex items-center w-full lg:w-1/2 ">
          <img
            className="lg:block hidden w-full"
            src="https://i.ibb.co/2kxWpNm/Group-740.png"
            alt="people discussing on board"
          />
          <img
            className="lg:hidden sm:block hidden w-full h-3/4"
            src="https://i.ibb.co/ZLgK3NQ/Group-788.png"
            alt="people discussing on board"
          />
          <img
            className="sm:hidden block w-full"
            src="https://i.ibb.co/9g2R7Xr/Group-803.png"
            alt="people discussing on board"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

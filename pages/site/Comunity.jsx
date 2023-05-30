import React from "react";
import { client, urlFor } from "../../lib/client";

const Comunity = ({ comunity }) => {
  return (
    <div className="2xl:mx-auto 2xl:container lg:py-16 lg:px-40 xl:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold leading-9 text-gray-800">
          Apartado de la comunidad
        </h1>
        <p className="text-base leading-6 text-center text-gray-600 sm:w-96 md:w-9/12 lg:w-5/12 mt-4">
          If you're looking for random paragraphs, you've come to the right
          place. When a random word or a random sentence isn't quite enough
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-8 md:gap-6 gap-4 lg:mt-12 md:mt-9 mt-6">
        {comunity.map((item) => (
          <div
            className="relative flex items-center justify-center border border-[#b5597e] uradtion-300 hover:shadow-2xl hover:shadow-[#b5597e]"
            key={item._id}
          >
            <img
              src={urlFor(item.image[0].asset)}
              className=" object-cover rounded-md h-[410px]"
              alt="chair"
            />
            <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
              <div className="flex items-center justify-center flex-col h-full">
                <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold leading-normal text-center text-white">
                  {item.name}
                </h2>
                <p className="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-white mt-4">
                  {item.summary}
                </p>
              </div>
              <div className="px-4 md:w-auto w-full">
                <button className="w-full hover:bg-gray-300 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none">
                  Leer mas
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "comunity"]`;
  const comunity = await client.fetch(query);
  //Todo lo que getServerSideProps retorna, se carga como un props al componente principal
  return {
    props: { comunity },
  };
};

export default Comunity;

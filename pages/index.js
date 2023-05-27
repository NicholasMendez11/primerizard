import React from "react";
import {
  Product,
  FooterBanner,
  HeroBanner,
  Hero,
  NewsLetter,
  About,
  Testimonios,
  Partners,
} from "../components";
import { client } from "../lib/client";
import Plyr from "plyr-react";
import VideoPlayer from "../components/subcomponents/VideoPlayer";
import { motion } from "framer-motion";
const Home = ({ courses, bannerData }) => {
  return (
    <>
      <Hero />
      <HeroBanner HeroBanner={bannerData.length && bannerData[0]} />
      <NewsLetter />
      <div className="bg-white mb-0 ">
        <div className=" flex flex-col gap-4 items-center">
          <h1
            id="courses"
            className="py-4 text-3xl font-medium  text-[#b5597e] text-center md:text-center tracking-tighter f-f-i md:w-7/10 leading-tight text-heading-color"
          >
            Elige el mejor Taller para la etapa en la que te encuentras
          </h1>
          <p className="text-center md:text-center text-gray-700 text-2xl font-medium">
            Las mejores instrucciones de los mejores intructores
          </p>

          <div className="md:w-[80vh] md:h-[80vh] p-2">
            {/* <VideoPlayer
              source={
                "https://drive.google.com/file/d/1a9MkygwJD4Jq0zBBdCuOc0c5yWHAffSD/preview"
              }
              // provider={"youtube"}
            /> */}
            <iframe
              src="https://drive.google.com/file/d/1a9MkygwJD4Jq0zBBdCuOc0c5yWHAffSD/preview"
              width="640"
              height="480"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
        <div className="lg:flex md:mt-[-20vh] px-2">
          {courses?.map((product, index) => (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ color: "#b5597e" }}
              transition={{ duration: index + 1 }}
              className="max-w-md mx-auto mt-4  border border-[#b5597e] rounded-md uradtion-300 hover:shadow-2xl hover:shadow-[#b5597e]"
            >
              <Product key={product._id} product={product} />
            </motion.div>
          ))}
        </div>
        <h1 className="block h1x-5 mt-5 text-center hover:text-[#b5597e] hover:cursor-pointer">
          Ver todos los Talleres
        </h1>
      </div>
      <About />
      <Testimonios />
      <Partners />

      {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
    </>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "courses"]`;
  const courses = await client.fetch(query);

  const bannerQuery = `*[_type == "banner"]`;
  const bannerData = await client.fetch(bannerQuery);
  //Todo lo que getServerSideProps retorna, se carga como un props al componente principal
  return {
    props: { courses, bannerData },
  };
};

export default Home;

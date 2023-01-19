import React from "react";
import {
  Product,
  FooterBanner,
  HeroBanner,
  Hero,
  NewsLetter,
  About,
  Testimonios,
  Partners
} from "../components";
import { client } from "../lib/client";
import ReactPlayer from "react-player";
const Home = ({ courses, bannerData }) => {
  return (
    <>
      <Hero />
      <HeroBanner HeroBanner={bannerData.length && bannerData[0]} />
      <NewsLetter />
      <div className="bg-white">
        <div className="products-heading flex flex-col gap-4 items-center">
          <h1 id="courses"  className="py-4 text-3xl lg:text-3xl xl:text-4xl font-medium  text-[#b5597e] text-center md:text-center tracking-tighter f-f-i md:w-7/10 leading-tight text-heading-color">
          Elige el mejor curso para la etapa en la que te encuentras
          </h1>
          <p className="text-center md:text-center text-gray-700 text-9xl font-medium">Las mejores instrucciones de los mejores intructores</p>
          <ReactPlayer url='https://vimeo.com/790543466/812280dd30'/>
        </div>
        <div className="products-container">
          {courses?.map((product) => (
            <Product key={product._id} product={product}  />
          ))}
        </div>
      </div>
      <About />
      <Testimonios/>
      <Partners/>
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

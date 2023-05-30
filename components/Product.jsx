import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { useStateContext } from "../context/StateContext";

const Product = ({ product }) => {
  const {
    image,
    name,
    slug,
    price,
    details,
    avatar,
    instructor,
    courseDemo,
    course,
  } = product;

  const { onAdd } = useStateContext();
  return (
    <article className="">
      <img
        src={urlFor(image[0])}
        alt={name}
        className="w-full h-48 rounded-t-md"
      />
      <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
        <div className="flex-none w-10 h-10 rounded-full">
          <img
            src={urlFor(avatar)}
            className="w-full h-full rounded-full"
            alt={instructor}
          />
        </div>
        <div className="ml-3">
          <span className="block text-gray-900">{instructor}</span>
          <span className="block text-gray-400 text-sm">Jan 4 2022</span>
        </div>
      </div>
      <div className="pt-3 ml-4 mr-2 mb-3">
        <h3 className="text-xl text-gray-900">{name}</h3>
        <p className="text-gray-400 text-sm mt-1">{details}</p>
        <Link href={`/product/${slug.current}`}>
          <button className="hover:opacity-90 my-2 bg-[#b5597e] py-2 px-3 lg:py-3 lg:px-5 rounded-lg text-white font-bold text-lg md:text-sm f-f-p ">
            Ver curso
          </button>
        </Link>
      </div>
    </article>
  );
};

export default Product;

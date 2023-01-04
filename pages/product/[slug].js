import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price, instructor, avatar } = product;
  console.log(product);
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const HandleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  return (
    <>
      <div className="p-9 bg-white">
        <div className="m-auto">
          <div className=" bg-[#f2e3e9] t mx-auto container w-full flex items-center md:flex-row flex-col justify-between px-6 lg:p-6">
            <div className="flex flex-col  justify-start items-start lg:w-2/5 px-2 lg:px-0">
              <div>
                <p className="text-3xl lg:text-3xl xl:text-4xl font-medium  text-[#b5597e] text-center md:text-left tracking-tighter f-f-i md:w-7/10 leading-tight text-heading-color">
                  {instructor}
                </p>
              </div>
              <div className="md:mt-3">
                <p className="text-[#b5597e] lg:text-4xl text-3xl font-extrabold leading-9">
                  {name}
                </p>
              </div>
              <div className="md:mt-3">
                <p className="lg:text-lg font-semibold text-lg leading-8 text-[#b5597e]">
                  2 semanas
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center lg:w-2/5 mt-10 md:mt-0">
              <img src={urlFor(image && image[0])} alt="courseBanner" />
            </div>
          </div>
          <div className="mx-auto container w-full flex xl:flex-row flex-col justify-between items-start mt-12 px-6 lg:px-0">
            <div className="flex flex-col justify-start items-start xl:w-2/4">
              <div>
                <h2 className="text-[#b5597e] lg:text-3xl text-2xl font-bold leading-7">
                  Con este curso:
                </h2>
              </div>
              <div className="mt-8">
                <p className="md:w-8/8 py-1 text-center md:text-left md:py-1 text-gray-700 text-lg lg:text-xl">
                  {details}
                </p>
              </div>
              <div className="mt-8 w-full"></div>
              <div className="mt-8 flex justify-start items-start flex-col">
                <div>
                  <p className="text-[#b5597e] lg:text-base text-sm font-semibold leading-none">
                    En este curso aprenderas:
                  </p>
                </div>
                <div className="md:w-8/8 py-1 text-center md:text-left md:py-1 text-gray-700 text-lg lg:text-xl">
                  <ul>
                    <li className="flex justify-start items-start space-x-1 flex-row">
                      <div>-</div>
                      <div>
                        Mauris ullamcorper neque sed mauris gravida, vel mollis
                        velit molestie.
                      </div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row">
                      <div>-</div>
                      <div>Donec iaculis erat in vulputate venenatis.</div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row">
                      <div>-</div>
                      <div>Vestibulum et velit et metus commodo iaculis.</div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row">
                      <div>-</div>
                      <div>
                        Sed et urna a felis accumsan commodo vel vel nibh.
                      </div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row">
                      <div>-</div>
                      <div>
                        Praesent sollicitudin nulla non sollicitudin varius.
                      </div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row">
                      <div>-</div>
                      <div>
                        Integer convallis orci sed diam volutpat feugiat.
                      </div>
                    </li>
                    <li className="flex justify-start items-start space-x-1 flex-row">
                      - Donec posuere arcu non semper maximus.
                    </li>
                  </ul>
                </div>
                <div className="mt-8 flex-col justify-start items-start">
                  <div>
                    <img
                      className="w-full"
                      src="https://i.ibb.co/S7LSZpk/Rectangle-45.png"
                      alt="girl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6 ">
              <div className="py-5 px-4 bg-[#b5597e] border  border-[#88BFD4] text-center hover:shadow-2xl hover:shadow-[#88BFD4] transition-all duration-300 rounded-lg">
                <h4 className="text-3xl text-white font-bold pb-8">Pro</h4>
                <ul className="flex flex-col mb-6">
                  <li className="flex items-center mb-2.5">
                    <img
                      src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                      className="mr-4"
                      alt="check-mark"
                    />
                    <p className="text-white text-base font-normal">
                      24/7 access
                    </p>
                  </li>
                  <li className="flex items-center mb-2.5">
                    <img
                      src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                      className="mr-4"
                      alt="check-mark"
                    />
                    <p className="text-white text-base font-normal">
                      Order labs + Results
                    </p>
                  </li>
                  <li className="flex items-center mb-2.5">
                    <img
                      src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                      className="mr-4"
                      alt="check-mark"
                    />
                    <p className="text-white text-base font-normal">
                      Radiology tests + Results
                    </p>
                  </li>
                  <li className="flex items-center mb-2.5">
                    <img
                      src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                      className="mr-4"
                      alt="check-mark"
                    />
                    <p className="text-white text-base font-normal">
                      Partnership + Discounts
                    </p>
                  </li>
                  <li className="flex items-center mb-2.5">
                 
                  </li>
                </ul>
                <p className="text-center text-white relative pl-3">
                  <span className="font-light text-lg">US$</span>
                  <span className="text-2xl font-semibold">{price}</span>
                  <span className="font-light text-lg">/month</span>
                </p>
                <button className="mt-5 w-full text-[#88BFD4] focus:outline-none transition duration-150 ease-in-out rounded bg-white hover:bg-gray-100 px-8 py-3 text-base font-semibold" onClick={() => HandleBuyNow()}>
                  Probar
                </button>
              </div>
            </div>
          </div>
          <div className="maylike-products-wrapper ">
            <h2>You may also Like</h2>
            <div className="marquee">
              <div className="maylike-products-container">
                {products.map((item) => (
                  <Product key={item.id} product={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "courses"] {
        slug{
            current
        }
    }`;
  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "courses" && slug.current == '${slug}'][0]`;
  const producstQuery = '*[_type == "courses"]';

  const product = await client.fetch(query);
  const products = await client.fetch(producstQuery);

  return {
    props: { product, products },
  };
};

export default ProductDetails;

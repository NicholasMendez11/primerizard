import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../lib/client";
import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";
import { createClient } from "@sanity/client";
import { toast, Toaster } from "react-hot-toast";
import VideoPlayer from "../../components/subcomponents/VideoPlayer";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/router";
import addData from "../../firebase/addData";
import { uid } from "uid";
import getOrdersByEmail from "../../firebase/getData";
import Image from "next/image";
import bannerImage from "../../public/banner.jpeg";
import { motion } from "framer-motion";
const ProductDetails = ({ product, products }) => {
  const { user, userState } = useStateContext();
  const router = useRouter();
  const [itemPurchased, setItemPurchased] = useState(false);
  useEffect(() => {
    async function validateOrders() {
      const orders = await getOrdersByEmail(user.email);

      if (
        orders.filter((order) => order.courseName === product.name).length > 0
      ) {
        setItemPurchased(true);
      }
    }
    if (user) {
      validateOrders();
    }
  }, [user]);

  const {
    image,
    name,
    details,
    price,
    instructor,
    avatar,
    courseDemo,
    course,
    slug,
  } = product;

  const pageId = JSON.stringify(slug);
  const handleLogin = () => {
    setTimeout(() => {
      router.push({
        pathname: "/auth/Login",
        query: { paymentRequest: true, slug: pageId },
      });
    }, 4000);
    toast.loading("Espere", {
      duration: 4000,
      position: "top-center",
    });
  };

  const handlePurchase = async () => {
    try {
      const res = await axios({
        url: "http://localhost:3001/api/payment",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          price: price, // Precio del producto enviado como parámetro
        },
      });
      return res.data.id;
    } catch (error) {}
  };

  const checkPrevPurchase = () => {
    if (itemPurchased) {
      return (
        <button
          onClick={() => handleLogin()}
          className="text-[#B5597E] bg-white hover:bg-[#88BED4] hover:text-white focus:ring-4 focus:ring-[#F1E2E9] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none mt-3"
        >
          Ya compraste este curso
        </button>
      );
    } else {
      return (
        <PayPalScriptProvider
          options={{
            "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
          }}
        >
          <PayPalButtons
            createOrder={() => handlePurchase()}
            onCancel={(data) =>
              toast.loading("compra cancelada", {
                duration: 4000,
                position: "top-center",
              })
            }
            onApprove={(data, action) => handleSucceed(data, action)}
            style={{ layout: "horizontal" }}
          />
        </PayPalScriptProvider>
      );
    }
  };

  const handleSucceed = async (data, actions) => {
    await actions.order.capture();

    //firestore
    const id = uid();
    const values = {
      course: course,
      demoID: courseDemo,
      purchaseDate: new Date(),
      details: details,
      price: price,
      paypalOrderId: data.orderID,
      payerID: data.payerID,
      paymentSource: data.paymentSource,
      courseName: name,
      userEmail: user.email,
    };

    const { result, error } = await addData("orders", id, values);

    if (error) {
      return console.log(error);
    } else {
      console.log("todo Bien");
    }

    router.push("/success");
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="md:p-2 bg-white">
        <div className="m-auto">
          <div className=" bg-[#f2e3e9] t mx-auto container w-full flex items-center md:flex-row flex-col justify-between px-6 lg:p-6">
            <div className="flex flex-col  justify-start items-start lg:w-2/5 px-2 lg:px-0">
              <div>
                <p className="text-3xl lg:text-3xl xl:text-4xl font-medium  text-[#b5597e] text-left tracking-tighter f-f-i md:w-7/10 leading-tight text-heading-color">
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
              <div className="mt-2">
                <p className="md:w-8/8 py-1 text-left md:py-1 text-gray-700 text-lg lg:text-xl">
                  {details}
                </p>
              </div>

              <div className="mt-8 flex justify-start items-start flex-col">
                <div>
                  <p className="text-[#b5597e] lg:text-start text-sm font-semibold leading-none">
                    En este taller aprenderas:
                  </p>
                </div>
                <div className="md:w-8/8 py-1 text-start md:text-left md:py-1 text-gray-700 text-lg lg:text-xl">
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
                    <VideoPlayer source={courseDemo} />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 mt-4 px-6 ">
              <div className=" bg-white border  border-[#88BFD4] text-center hover:shadow-2xl hover:shadow-[#88BFD4] transition-all duration-300 rounded-lg">
                <Image src={bannerImage} alt="Banner" />
                <p className="text-center py-4 px-4  relative pl-3 text-[#b5597e]">
                  <span className="font-light text-md">US$</span>
                  <span className="text-xl font-semibold">{price}</span>
                </p>

                {user ? (
                  checkPrevPurchase()
                ) : (
                  <button
                    onClick={() => handleLogin()}
                    className="text-[#88BED4] bg-white hover:bg-[#B5597E] hover:text-white focus:ring-4 focus:ring-[#F1E2E9] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none mt-3"
                  >
                    Iniciar sesion para comprar
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="maylike-products-wrapper ">
            <h2>You may also Like</h2>
            <div className="marquee">
              <div className=" lg:flex">
                {products.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ color: "#b5597e" }}
                    transition={{ duration: index + 1 }}
                    className="max-w-md mx-auto mt-4  border border-[#b5597e] rounded-md uradtion-300 hover:shadow-2xl hover:shadow-[#b5597e]"
                  >
                    <Product key={item.id} product={item} />
                  </motion.div>
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

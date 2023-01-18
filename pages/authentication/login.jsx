import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook, GrTwitter } from "react-icons/gr";
import logoPrincipal from "../../public/assets/logoPrincipal.png";
import { useStateContext } from "../../context/StateContext";
import Image from "next/image";
function login() {
  const { userState, signIn } = useStateContext();

  return (
    <section className="h-screen">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <Image src={logoPrincipal} className="w-full" alt="Phone image" />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <h1 className="text-center text-[#ff6c89] mb-10 text-xl animate-pulse">
              Dejanos brindarte un servicio mas personalizado
            </h1>
              {/* Email input */}
              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email"
                />
              </div>
              {/* Password input */}
              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Contraseña"
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#ff6c89] checked:border-[#ff6c89] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck3"
                    defaultChecked
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck2"
                  >
                    Recuerdame
                  </label>
                </div>
                <a
                  href="#!"
                  className="text-[#ff6c89] hover:text-[#ff6c899b] focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                >
                  Olvide mi contraseña
                </a>
              </div>
              {/* Submit button */}
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-[#ff6c89] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-[#ff6c899b] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                
              >
                Sign in
              </button>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>

              <div className="flex justify-between">
                <button onClick={signIn} className="px-7 py-3 shadow-md hover:shadow-lg focus:shadow-lg  active:shadow-lg transition duration-150 ease-in-out rounded hover:cursor-pointer ">
                  <FcGoogle size={30} />
                </button>
                <button className="px-7 py-3 shadow-md hover:shadow-lg focus:shadow-lg  active:shadow-lg transition duration-150 ease-in-out rounded hover:cursor-pointer ">
                  <GrFacebook size={30} color={"#4267B2"} />
                </button>
                <button className="px-7 py-3 shadow-md hover:shadow-lg focus:shadow-lg  active:shadow-lg transition duration-150 ease-in-out rounded hover:cursor-pointer ">
                  <GrTwitter size={30} color={"#1DA1F2"} />
                </button>
              </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default login;

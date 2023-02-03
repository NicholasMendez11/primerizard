import React from "react";
import logo from "../public/assets/screenshot.png";
import Link from "next/link";
import Image from "next/image";
import { useStateContext } from "../context/StateContext";
import { useRouter } from "next/router";
function Navbar1() {
  const { showCart, setShowCart, totalQuantities, userState, signOut, user } =
    useStateContext();
  const router = useRouter();
  console.log(user);
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5   w-full z-20 top-0 left-0 hover:shadow-lg  hover:shadow-[#b5597e70] transition-shadow ease-in duration-300">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
      
        <div className="w-[150px] md:w-[300px]">
          <Link href="/">
            <Image src={logo} alt="logo de marca" />
          </Link>
            
        </div>
        <div className="flex md:order-2">
          {user != null ? (
            <div className="flex flex-row">
              <button
                type="button"
                className="text-white bg-[#b5597e] hover:bg-[#b5597ec0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
                onClick={signOut}
              >
                Cerrar Sesion
              </button>

              <div className="h-12 w-12 mb-4 hidden lg:flex lg:mb-0 ml-2 md:ml-9">
                <img
                  src={user?.photoURL}
                  alt
                  className="h-full w-full rounded-full overflow-hidden shadow"
                />
              </div>
            </div>
          ) : (
            <button
              type="button"
              className="text-white bg-[#b5597e] hover:bg-[#b5597ec0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
              onClick={() => router.push("/auth/login")}
            >
              Iniciar Sesion
            </button>
          )}

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-[#b5597e70] rounded md:bg-transparent md:text-[#b5597e] md:p-0"
                aria-current="page"
              >
                Asesorias
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#b5597e] md:p-0 "
              >
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#b5597e] md:p-0 "
              >
                Contacto
              </a>
            </li>
            <li>
              <Link
                href="site/Comunity"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#b5597e] md:p-0 "
              >
                Comunidad
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;

import React, { useState } from "react";
import logo from "../public/assets/screenshot.png";
import Link from "next/link";
import Image from "next/image";
import { useStateContext } from "../context/StateContext";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
function Navbar1() {
  const { signOut, user } = useStateContext();
  const router = useRouter();
  const [visibleMenu, setVisibleMenu] = useState(false);

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
            </div>
          ) : (
            <button
              type="button"
              className="text-white bg-[#b5597e] hover:bg-[#b5597ec0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
              onClick={() => router.push("/auth/Login")}
            >
              Iniciar Sesion
            </button>
          )}

          <button
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            onClick={() => setVisibleMenu(!visibleMenu)}
            type="button"
            className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <AnimatePresence>
            {visibleMenu && (
              <motion.div
                layout
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                id="default-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen md:hidden "
                aria-label="Sidebar"
              >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                  <div className="w-[150px] md:w-[300px]">
                    <Link href="/">
                      <Image src={logo} alt="logo de marca" />
                    </Link>
                  </div>
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
                    {/* <li>
                      <Link
                        href="/site/Comunity"
                        className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#b5597e] md:p-0 "
                      >
                        Comunidad
                      </Link>
                    </li> */}
                    {user && (
                      <li>
                        <Link
                          href="/site/Courses"
                          className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#b5597e] md:p-0 "
                        >
                          Mis Talleres
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
              <Link
                href="/"
                className=" cursor-not-allowed block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#393537] md:p-0 "
              >
                Comunidad
              </Link>
            </li>
            {user && (
              <li>
                <Link
                  href="/site/Courses"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#b5597e] md:p-0 "
                >
                  Mis Talleres
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar1;

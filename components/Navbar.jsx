import React, { useState } from "react";
import Link from "next/link";
import {
  AiOutlineShopping,
  AiOutlineUser,
  AiOutlineCheck,
} from "react-icons/ai";
import { Cart } from "./";
import Image from "next/image";
import { useStateContext } from "../context/StateContext";
import logo from "../public/assets/Logo-official.webp";
import Router, { useRouter } from "next/router";
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities, userState, auth } =
    useStateContext();
  const [IconColor, setIconColor] = useState("#99999F");
  const [IconColor2, setIconColor2] = useState("#99999F");
  const [show, setShow] = useState(false);

  const router = useRouter();

  return (
    <>
      <div className="navbar-container  bg-white px-5 py-2 ">
        <p className="logo">
          <Link href="/">
            <Image src={logo} alt="logo de marca" />
          </Link>
        </p>
        <div className="flex justify-center items-center w-screen">
          <p className="hover:scale-125 cursor-pointer transition m-5 text-[#747478] hover:text-[#bbbbc2]">
            <Link href="#courses">Talleres Online</Link>
          </p>
          <p className="hover:scale-125 cursor-pointer transition m-5  text-[#747478] hover:text-[#bbbbc2]">
            Asesorias
          </p>
          <p className="hover:scale-125 cursor-pointer transition m-5 text-[#747478] hover:text-[#bbbbc2]">
            Sobre Mi
          </p>
          <p className="hover:scale-125 cursor-pointer transition m-5 text-[#747478] hover:text-[#bbbbc2]">
            Contacto
          </p>
        </div>

        {!userState ? (
          <Link href={"/authentication/login"}>
            <div className="w-[300px]">
              <p className="hover:scale-125 cursor-pointer transition m-5 text-[#747478] hover:text-[#B5597E]">
                Iniciar sesion
              </p>
            </div>
          </Link>
        ) : (
          <button
            type="button"
            className="cart-icon  text-[#99999F] rounded-md duration-1000	"
            onClick={() => setShowCart(true)}
            onMouseEnter={() => setIconColor("#B5597E")}
            onMouseLeave={() => setIconColor("#99999F")}
          >
            <p className="hover:scale-125 cursor-pointer transition m-5 text-[#747478] hover:text-[#B5597E]">
              {userState?.displayName}
            </p>
          </button>
        )}
        {/* <button
              type="button"
              className="cart-icon mx-5  text-white rounded-md duration-100	"
              onClick={() => setShowCart(true)}
              onMouseEnter={() => setIconColor2("white")}
              onMouseLeave={() => setIconColor2("#99999F")}
            >
              <AiOutlineShopping color={IconColor2} size={40} />
              <span className="cart-item-qty">{totalQuantities}</span>
            </button> */}
        {showCart && <Cart />}
      </div>
    </>
  );
};

export default Navbar;

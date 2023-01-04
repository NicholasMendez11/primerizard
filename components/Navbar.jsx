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
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [IconColor, setIconColor] = useState("#99999F");
  const [IconColor2, setIconColor2] = useState("#99999F");
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="navbar-container  bg-white px-5 py-2 ">
        <p className="logo">
          <Link href="/">
            <Image src={logo} alt="logo de marca" width={350} height={500} />
          </Link>
        </p>
        <div className="flex justify-center items-center w-screen">
          <p className="hover:scale-125 cursor-pointer transition m-5 text-[#747478] hover:text-[#bbbbc2]">
            Cursos Online
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
        <div className="flex justify-center items-center   cursor-pointer transition ">
          <button
            type="button"
            className="cart-icon  text-[#99999F] rounded-md duration-1000	"
            onClick={() => setShowCart(true)}
            onMouseEnter={() => setIconColor("#B5597E")}
            onMouseLeave={() => setIconColor("#99999F")}
          >
            <AiOutlineUser color={IconColor} size={35} />
          </button>
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
        </div>
        {showCart && <Cart />}
      </div>
      
    </>
  );
};

export default Navbar;

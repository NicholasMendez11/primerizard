import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "../context/StateContext";
import { runConfetti } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runConfetti();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>¡Gracias por tu compra!</h2>
        <p className="email-msg">Tu factura se enviara a tu correo.</p>
        <p className="description">
          Si tienes alfuna pregunta, cominicate a{" "}
          <a className="email" href="mailto:primerizard@gmail.com">
            primerizard@gmail.com
          </a>
        </p>
        <Link href="/site/Courses">
          <button type="button" width="300px" className="btn">
            Ir a mis Talleres
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;

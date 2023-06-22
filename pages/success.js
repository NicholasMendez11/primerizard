import React from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";


const Success = () => {

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

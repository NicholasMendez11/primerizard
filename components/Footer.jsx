import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer-container bg-white">
      <p>2023 PrimerizaRD&#169; Todos los derechos reservados</p>
      <p className="icons">
        <AiFillInstagram
          className="hover:cursor-pointer"
          onClick={() => {
            window.open("https://www.instagram.com/primerizard/", "_blank");
          }}
        />
        <AiOutlineWhatsApp
          className="hover:cursor-pointer"
          onClick={() => {
            window.open(
              "https://chat.whatsapp.com/GXKpnNfotZzD4AOxlQD83W",
              "_blank"
            );
          }}
        />
        <AiOutlineYoutube
          className="hover:cursor-pointer"
          onClick={() => {
            window.open("https://www.youtube.com/@PrimerizaRD", "_blank");
          }}
        />
      </p>
    </div>
  );
};

export default Footer;

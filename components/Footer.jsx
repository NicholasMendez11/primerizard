import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className="footer-container bg-white">
      <p>2023 PrimerizaRD&#169; Todos los derechos reservados</p>
      <p className="icons">
        <AiFillInstagram/>
        <AiOutlineTwitter/>
        <AiOutlineWhatsApp/>
      </p>
    </div>
  )
}

export default Footer

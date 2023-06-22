import React from "react";
import Head from "next/head";
import Navbar from "./Navbar1";
import Footer from "./Footer";
import Fab from "./subcomponents/Fab";
import Script from "next/script";
import favicon from '../public/favicon.ico'
const Layout = ({ children }) => {
  return (
    <div className="layout ">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0"
        ></meta>
        <link rel="stylesheet" href="https://cdn.plyr.io/3.6.8/plyr.css" />
        {/* <link rel="" href="../public/icon.png" /> */}
      <link rel="shortcut icon" href={favicon} /> 

        <title>Primeriza RD</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="overflow-x-hidden">{children}</main>
      <Script src="https://cdn.plyr.io/3.6.8/plyr.js"></Script>
      <footer>
        <Footer />
      </footer>
      <Fab />
    </div>
  );
};

export default Layout;

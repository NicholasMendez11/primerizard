import React from "react";
import Head from "next/head";
import Navbar from "./Navbar1";
import Footer from "./Footer";
import Fab from "./subcomponents/Fab";
import Script from "next/script";
const Layout = ({ children }) => {
  return (
    <div className="layout ">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0"
        ></meta>
        <link rel="stylesheet" href="https://cdn.plyr.io/3.6.8/plyr.css" />
        <Script src="https://cdn.plyr.io/3.6.8/plyr.js"></Script>

        <title>Primeriza RD</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="overflow-x-hidden">{children}</main>
      <footer>
        <Footer />
      </footer>
      <Fab />
    </div>
  );
};

export default Layout;

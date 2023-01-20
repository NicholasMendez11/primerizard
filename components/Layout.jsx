import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar1'
import Footer from './Footer'
import Fab from './subcomponents/Fab'
const Layout = ({children}) => {
  return (
    <div className="layout ">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Qwitcher+Grypen&display=swap" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0"></meta>
        
        <title>Primeriza RD</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
      <Fab/>
    </div>
  )
}

export default Layout

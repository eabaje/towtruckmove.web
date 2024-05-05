import React from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({
  children,
  title = "TowTruckMove-Your best partner in vehicle emergency management",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main class="main" id="top">
        <Header />
        <ToastContainer position="bottom-right" />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
